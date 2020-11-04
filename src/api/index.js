/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchFlightsData = async () => {
  const response = await axios.get(
    'https://tw-frontenders.firebaseio.com/advFlightSearch.json'
  );
  return response;
};
