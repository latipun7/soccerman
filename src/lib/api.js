import axios from 'axios';

const BASE_URL = 'https://api.ruppy.io/football';

async function getPLStandings() {
  try {
    const { data } = await axios.get(`${BASE_URL}/epl-standings`);
    return data;
  } catch (error) {
    return error;
  }
}

async function getTeamByID(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/teams/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

async function getTeamMatches(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/teams/${id}/matches`);
    return data;
  } catch (error) {
    return error;
  }
}

export { getPLStandings, getTeamByID, getTeamMatches };
