import html from './templates/home.html';
import container from './templates/page-container.html';
import { getPLStandings, getTeamByID } from '../lib/api';
import { isEmpty, template } from '../lib/utils';
import { addPageContents, updateView } from '../lib/view';
import {
  addOrUpdateToStore,
  deleteFromStore,
  getFromStore,
} from '../lib/idb-utils';

addPageContents({
  name: 'home',
  model: { standings: [], following: [] },
  controller: async (model) => {
    const self = model;
    const [result, followed] = await Promise.all([
      getPLStandings(),
      getFromStore('EPL', 'team'),
    ]);

    self.standings = result.standings[0].table;
    self.following = followed;
  },
  view: (model, loading) => {
    let standingsHTML;

    if (isEmpty(model.standings)) {
      standingsHTML = '';
    } else {
      const compared = model.standings.map((standing) => {
        const findMatch =
          model.following &&
          model.following.find((db) => db.id === standing.team.id);

        return { ...standing, isMatch: !!findMatch };
      });

      standingsHTML = compared.reduce(
        (prev, current) => `
          ${prev}
          ${template(html, {
            id: current.team.id,
            crestUrl: current.team.crestUrl,
            name: current.team.name,
            points: current.points,
            followed: current.isMatch,
            btnColor: current.isMatch ? 'red' : 'teal',
            btnIcon: current.isMatch
              ? 'person_remove_alt_1'
              : 'person_add_alt_1',
          })}
        `,
        ''
      );
    }

    const containerHTML = template(container, {
      title: 'Premiere League',
      content: loading || standingsHTML,
    });

    return { contents: `${containerHTML}` };
  },
  events: () => {
    const buttons = document.querySelectorAll('.btn-follow');

    const onClick = async (event) => {
      try {
        const { id } = event.currentTarget.dataset;
        const { followed } = event.currentTarget.dataset;
        const result = await getTeamByID(id);

        if (followed === 'true') {
          await deleteFromStore(result.id, 'EPL', 'team');
          await updateView(true);

          M.toast({
            html: `<strong style="font-weight:bold;">Unfollow&nbsp;${result.name}</strong>&nbsp;❌`,
            classes: 'teal',
          });
        } else {
          await addOrUpdateToStore(result, 'EPL', 'team');
          await updateView(true);
          M.toast({
            html: `Now following&nbsp;<strong style="font-weight:bold;">${result.name}</strong>&nbsp;🎉`,
            classes: 'teal',
          });
        }
      } catch (error) {
        M.toast({
          html: `Something went wrong, sorry! 😢`,
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
