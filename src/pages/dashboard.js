import html from './templates/dashboard.html';
import container from './templates/page-container.html';
import settings from './templates/settings.html';
import { getTeamByID } from '../lib/api';
import { deleteFromStore, getFromStore } from '../lib/idb-utils';
import { isEmpty, template } from '../lib/utils';
import { addPageContents, updateView } from '../lib/view';

addPageContents({
  name: 'dashboard',
  model: { following: [] },
  controller: async (model) => {
    const self = model;
    const result = await getFromStore('EPL', 'team');

    self.following = result;
  },
  view: (model, loading) => {
    let dashboardHTML;

    if (isEmpty(model.following)) {
      dashboardHTML =
        '<h5 class="center">You don\'t have followed teams 🙅🏻‍♀️</h5>';
    } else {
      dashboardHTML = model.following.reduce(
        (prev, current) => `
          ${prev}
          ${template(html, {
            id: current.id,
            crestUrl: current.crestUrl,
            name: current.name,
            btnIcon: 'person_remove_alt_1',
          })}
        `,
        ''
      );
    }

    const followedTeamsHTML = template(container, {
      title: 'Followed Teams',
      content: loading || dashboardHTML,
    });

    const settingsHTML = template(container, {
      title: 'Settings',
      content: settings,
    });

    return { contents: `${settingsHTML}${followedTeamsHTML}` };
  },
  events: () => {
    const buttons = document.querySelectorAll('.btn-follow');

    const onClick = async (event) => {
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

    const init = () => {
      buttons.forEach((button) => {
        button.addEventListener('click', onClick);
      });
    };

    const teardown = () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', onClick);
      });
    };

    return { init, teardown };
  },
});
