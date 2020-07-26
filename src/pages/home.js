import { getPLStandings } from '../lib/api';
import { isEmpty, template } from '../lib/utils';
import { addPageContents } from '../lib/view';
import html from './templates/home.html';
import container from './templates/page-container.html';

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

    if (isEmpty(model.standings)) {
      standingsHTML = '';
    } else {
      standingsHTML = model.standings.reduce(
        (prev, current) => `
          ${prev}
          ${template(html, {
            id: current.team.id,
            crestUrl: current.team.crestUrl,
            name: current.team.name,
            points: current.points,
          })}
        `,
        ''
      );
    }

    const containerHTML = template(container, {
      title: 'Premiere League',
      content: loading || standingsHTML,
    });

    return { contents: `${containerHTML}`, outside: '' };
  },
});
