import axios from 'axios';

const BASE_URL = 'https://api.football-data.org/v2';

const options = {
  headers: { 'X-Auth-Token': '6a66976fba4c43568ac32af323de8814' },
};

const getPLMatches = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/competitions/PL/matches`,
      options
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const getPLStandings = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/competitions/PL/standings`,
      options
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export { getPLMatches, getPLStandings };
