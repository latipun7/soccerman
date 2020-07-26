import { getTeamByID, getTeamMatches } from '../lib/api';
import { isEmpty, template } from '../lib/utils';
import { addPageContents } from '../lib/view';
import teamDetails from './templates/team.html';
import matches from './templates/team-matches.html';
import container from './templates/page-container.html';
import button from './templates/sticky-button.html';

addPageContents({
  name: 'team',
  model: { team: {} },
  controller: async (model, idParam) => {
    const self = model;
    const [teamDetail, teamMatches] = await Promise.all([
      getTeamByID(idParam[0]),
      getTeamMatches(idParam[0]),
    ]);
    self.team = { teamDetail, teamMatches };
  },
  view: (model, loading = '') => {
    let teamHTML;
    let teamMatchesHTML;

    if (isEmpty(model.team)) {
      teamHTML = '';
    } else {
      if (isEmpty(model.team.teamMatches.matches)) {
        teamMatchesHTML = 'No scheduled match 🙅🏻‍♀️';
      } else {
        teamMatchesHTML = model.team.teamMatches.matches.reduce(
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

      teamHTML = template(teamDetails, {
        id: model.team.teamDetail.id,
        crestUrl: model.team.teamDetail.crestUrl,
        name: model.team.teamDetail.name,
        tla: model.team.teamDetail.tla,
        country: model.team.teamDetail.area.name,
        address: model.team.teamDetail.address,
        phone: model.team.teamDetail.phone,
        email: model.team.teamDetail.email,
        founded: model.team.teamDetail.founded.toString(),
        clubColors: model.team.teamDetail.clubColors,
        venue: model.team.teamDetail.venue,
        website: model.team.teamDetail.website,
        teamMatches: teamMatchesHTML,
      });
    }

    const containerHTML = template(container, {
      title: model.team ? model.team.teamDetail.name : 'Team Details',
      content: loading || teamHTML,
    });

    return { contents: `${containerHTML}`, outside: `${button}` };
  },
});
