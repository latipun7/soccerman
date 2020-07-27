import container from './templates/page-container.html';
import stickyButton from './templates/sticky-button.html';
import matches from './templates/team-matches.html';
import teamDetails from './templates/team.html';
import { getTeamByID, getTeamMatches } from '../lib/api';
import { isEmpty, template } from '../lib/utils';
import { addPageContents, updateView } from '../lib/view';
import {
  addOrUpdateToStore,
  deleteFromStore,
  getOneFromStore,
} from '../lib/indexedDB';

addPageContents({
  name: 'team',
  model: { teamDetail: {}, teamMatches: {}, isFollowing: Boolean },
  controller: async (model, idParam) => {
    const self = model;
    const [teamDetail, teamMatches, followed] = await Promise.all([
      getTeamByID(idParam[0]),
      getTeamMatches(idParam[0]),
      getOneFromStore(idParam[0], 'EPL', 'team'),
    ]);

    self.teamDetail = teamDetail;
    self.teamMatches = teamMatches;
    self.isFollowing = !!followed;
  },
  view: (model, loading) => {
    let teamHTML;
    let teamMatchesHTML;
    let buttonHTML;

    if (isEmpty(model.teamDetail)) {
      teamHTML = '';
    } else {
      if (isEmpty(model.teamMatches.matches)) {
        teamMatchesHTML = 'No scheduled match 🙅🏻‍♀️';
      } else {
        teamMatchesHTML = model.teamMatches.matches.reduce(
          (prev, current) => `
            ${prev}
            ${template(matches, {
              competition: current.competition.name,
              matchday: current.matchday
                ? `matchday #${current.matchday.toString()}`
                : '',
              home: current.homeTeam.name,
              away: current.awayTeam.name,
              date: new Date(current.utcDate).toLocaleString(),
            })}
          `,
          ''
        );
      }

      buttonHTML = template(stickyButton, {
        dataset: model.isFollowing ? 'data-followed=true' : '',
        btnColor: model.isFollowing ? 'red' : 'teal',
        btnIcon: model.isFollowing ? 'person_remove_alt_1' : 'person_add_alt_1',
        btnCaption: model.isFollowing ? 'Unfollow' : 'Follow',
      });

      teamHTML = template(teamDetails, {
        id: model.teamDetail.id,
        crestUrl: model.teamDetail.crestUrl,
        name: model.teamDetail.name,
        tla: model.teamDetail.tla,
        country: model.teamDetail.area.name,
        address: model.teamDetail.address,
        phone: model.teamDetail.phone,
        email: model.teamDetail.email,
        founded: model.teamDetail.founded.toString(),
        clubColors: model.teamDetail.clubColors,
        venue: model.teamDetail.venue,
        website: model.teamDetail.website,
        teamMatches: teamMatchesHTML,
      });
    }

    const containerHTML = template(container, {
      title: model.teamDetail ? model.teamDetail.name : 'Team Details',
      content: loading || teamHTML,
    });

    return { contents: `${containerHTML}`, outside: `${buttonHTML}` };
  },
  events: (model) => {
    const btnFollow = document.querySelector('.btn-large.btn');

    const onClick = async (event) => {
      try {
        const { id } = model.teamDetail;
        const { followed } = event.target.dataset;
        const result = await getTeamByID(id.toString());

        if (followed) {
          await deleteFromStore(result.id, 'EPL', 'team');
          await updateView(true, [id.toString()]);

          M.toast({
            html: `<strong style="font-weight:bold;">Unfollow&nbsp;${result.name}</strong>&nbsp;❌`,
            classes: 'teal',
          });
        } else {
          await addOrUpdateToStore(result, 'EPL', 'team');
          await updateView(true, [id.toString()]);
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
      btnFollow.addEventListener('click', onClick);
    };

    const teardown = () => {
      btnFollow.removeEventListener('click', onClick);
    };

    return { init, teardown };
  },
});
