import html from './templates/dashboard.html';
import container from './templates/page-container.html';
import settings from './templates/settings.html';
import { getTeamByID } from '../lib/api';
import { deleteFromStore, getFromStore } from '../lib/idb-utils';
import { httpsWorkaround, isEmpty, template } from '../lib/utils';
import { addPageContents, updateView } from '../lib/view';
import {
  initNotificationPermission,
  subscribePushNotification,
} from '../app/push-notifications';

addPageContents({
  name: 'dashboard',
  model: { following: [] },
  controller: async (model) => {
    const self = model;
    const result = await getFromStore('EPL', 'team');

    self.following = result;
  },
  view: (model, loading) => {
    let settingsHTML;
    let followedTeamList;

    if ('Notification' in window && 'PushManager' in window) {
      settingsHTML = template(container, {
        title: 'Settings',
        content: settings,
      });
    } else {
      settingsHTML = '';
    }

    if (isEmpty(model.following)) {
      followedTeamList =
        '<h5 class="center">You don\'t have followed teams 🙅🏻‍♀️</h5>';
    } else {
      followedTeamList = model.following.reduce(
        (prev, current) => `
          ${prev}
          ${template(html, {
            id: current.id,
            crestUrl: httpsWorkaround(current.crestUrl),
            name: current.name,
            btnIcon: 'person_remove_alt_1',
          })}
        `,
        ''
      );
    }

    const followedTeamsHTML = template(container, {
      title: 'Followed Teams',
      content: loading || followedTeamList,
    });

    return { contents: `${settingsHTML}${followedTeamsHTML}` };
  },
  events: () => {
    const unfollowButtons = document.querySelectorAll('.btn-follow');
    const pushCheckbox = document.querySelector('input[id="push-settings"]');
    const isPushSupported = 'Notification' in window && 'PushManager' in window;

    const onClickUnfollow = async (event) => {
      try {
        const { id } = event.currentTarget.dataset;
        const result = await getTeamByID(id);

        await deleteFromStore(result.id, 'EPL', 'team');
        await updateView(true);
        M.toast({
          html: `<strong style="font-weight:bold;">${result.name}</strong>&nbsp;Deleted&nbsp;❌`,
          classes: 'teal',
        });
      } catch (error) {
        M.toast({
          html: `Not Deleted. Something went wrong, sorry! 😢`,
          classes: 'red',
        });
      }
    };

    const initSwitchState = async () => {
      const userConsent = await initNotificationPermission();

      if (userConsent === 'granted') {
        pushCheckbox.checked = true;
      } else {
        pushCheckbox.checked = false;
      }
    };

    const onChangePush = async () => {
      const userConsent = await initNotificationPermission();

      if (userConsent === 'granted') {
        if (pushCheckbox.checked) {
          subscribePushNotification();
        } else {
          pushCheckbox.checked = true;
          M.toast({
            html: 'Change consent in the browser settings. 😢',
            classes: 'amber darken-3',
          });
        }
      } else if (userConsent === 'denied') {
        pushCheckbox.checked = false;
        M.toast({
          html: "I'm not allowed to send push notifications. 😢",
          classes: 'red',
        });
      } else {
        pushCheckbox.checked = false;
        M.toast({
          html: 'You need to click allow to show notifications ⚠',
          classes: 'amber darken-3',
        });
      }
    };

    const init = () => {
      unfollowButtons.forEach((button) => {
        button.addEventListener('click', onClickUnfollow);
      });

      if (isPushSupported) {
        initSwitchState();
        pushCheckbox.addEventListener('change', onChangePush);
      }
    };

    const teardown = () => {
      unfollowButtons.forEach((button) => {
        button.removeEventListener('click', onClickUnfollow);
      });

      if (isPushSupported) {
        pushCheckbox.removeEventListener('change', () => onChangePush);
      }
    };

    return { init, teardown };
  },
});
