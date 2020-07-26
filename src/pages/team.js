import { getTeamByID } from '../lib/api';
import { isEmpty, template } from '../lib/utils';
import { addPageContents } from '../lib/view';
import html from './templates/team.html';
import container from './templates/page-container.html';
import button from './templates/sticky-button.html';

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
      teamHTML = template(html, {
        id: model.team.id,
        crestUrl: model.team.crestUrl,
        name: model.team.name,
        website: model.team.website,
      });
    }

    const containerHTML = template(container, {
      title: model.team ? model.team.name : 'Team Details',
      content: loading || teamHTML,
    });

    return { contents: `${containerHTML}`, outside: `${button}` };
  },
});
