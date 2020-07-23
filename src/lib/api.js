import axios from 'axios';

const BASE_URL = 'https://api.football-data.org/v2';
const options = {
  headers: { 'X-Auth-Token': '6a66976fba4c43568ac32af323de8814' },
};

async function getPLMatches() {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/competitions/PL/matches`,
      options
    );
    return data;
  } catch (error) {
    return error;
  }
}

async function getPLStandings() {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/competitions/PL/standings`,
      options
    );
    return data;
  } catch (error) {
    return error;
  }
}

async function getTeamByID(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/teams/${id}`, options);
    return data;
  } catch (error) {
    return error;
  }
}

export { getPLMatches, getPLStandings, getTeamByID };
