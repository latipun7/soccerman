import { getPLStandings } from '../lib/api';
import { addPageContents } from '../lib/view';

addPageContents({
  name: 'home',
  model: { standings: [] },
  controller: async (model) => {
    const self = model;
    const result = await getPLStandings();
    self.standings = result.standings[0].table;
  },
  view: (model, loading = '') => {
    let standingsHTML;

    if (model.standings.length === 0) {
      standingsHTML = '';
    } else {
      standingsHTML = model.standings.reduce(
        (prev, current) => `
          ${prev}
          <div class="col s12 m6 l4">
            <div class="card">
              <a href="/#/team/${current.team.id}">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="${current.team.crestUrl}" alt="${current.team.name}" />
                </div>
              </a>
              <div class="card-content">
                <span class="card-title truncate">${current.team.name}</span>
                <p>${current.points} pts</p>
              </div>
            </div>
          </div>
        `,
        ''
      );
    }
    return `
      <h3 class="center">Premiere League</h3>
      <div class="row">${loading}${standingsHTML}</div>
    `;
  },
});
