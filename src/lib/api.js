import axios from 'axios';

const BASE_URL = 'https://api.football-data.org/v2';

async function getPLStandings() {
  try {
    const { data } = await axios.get(`${BASE_URL}/competitions/PL/standings`, {
      headers: { 'X-Auth-Token': '6a66976fba4c43568ac32af323de8814' },
    });
    return data;
  } catch (error) {
    return error;
  }
}

async function getTeamByID(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/teams/${id}`, {
      headers: { 'X-Auth-Token': '6a66976fba4c43568ac32af323de8814' },
    });
    return data;
  } catch (error) {
    return error;
  }
}

async function getTeamMatches(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/teams/${id}/matches`, {
      headers: { 'X-Auth-Token': '6a66976fba4c43568ac32af323de8814' },
    });
    return data;
  } catch (error) {
    return error;
  }
}

export { getPLStandings, getTeamByID, getTeamMatches };
