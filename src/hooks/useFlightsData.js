/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { fetchFlightsData } from '../api';

export const useFlightData = () => {
  const [state, setState] = React.useState([]);

  useEffect(() => {
    const response = fetchFlightsData();
    setState(response.data);
  }, []);
  return state;
};
