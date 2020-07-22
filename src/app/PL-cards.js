import { getPLStandings } from '../lib/api';

let cardsHTML;
const loading = `
<div class="col s12 center">
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</div>
`;

const EPLStandings = async () => {
  cardsHTML = loading;
  const element = document.getElementById('standings');
  element.innerHTML = cardsHTML;

  try {
    const result = await getPLStandings();
    const PLStandings = result.standings[0].table;
    cardsHTML = '';

    PLStandings.forEach((standing) => {
      cardsHTML += `
      <div class="col s12 m6 l4">
        <div class="card">
          <a href="/#/team?id=${standing.team.id}">
            <div class="card-image waves-effect waves-block waves-light">
              <img src="${standing.team.crestUrl}" alt="${standing.team.name}" height="294px" />
            </div>
          </a>
          <div class="card-content">
            <span class="card-title truncate">${standing.team.name}</span>
            <p>${standing.points} pts</p>
          </div>
        </div>
      </div>
      `;
    });
  } catch (error) {
    cardsHTML = `<pre>${error}</pre>`;
  }

  element.innerHTML = cardsHTML;
};

export default EPLStandings;
