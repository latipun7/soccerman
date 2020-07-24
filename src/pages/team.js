import { getTeamByID } from '../lib/api';
import isEmpty from '../lib/utils';
import { addPageContents } from '../lib/view';

addPageContents({
  name: 'team',
  model: { team: {} },
  controller: async (model, idParam) => {
    const self = model;
    const result = await getTeamByID(idParam[0]);
    self.team = result;
  },
  view: (model, loading = '') => {
    let teamHTML;

    if (isEmpty(model.team)) {
      teamHTML = '';
    } else {
      teamHTML = `
        <div class="col s12">
          <div class="card">
            <a href="/#/team/${model.team.id}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="${model.team.crestUrl}" alt="${model.team.name}" />
              </div>
            </a>
            <div class="card-content">
              <span class="card-title truncate">${model.team.name}</span>
              <p>
                Website:
                <a 
                  href="${model.team.website}" 
                  target="_blank" 
                  rel="noreferrer noopener"
                >
                  ${model.team.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      `;
    }
    return `
      <h3 class="center">${model.team ? model.team.name : 'Team Details'}</h3>
      <div class="row">${loading}${teamHTML}</div>
    `;
  },
});
