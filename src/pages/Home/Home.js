/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { fetchFlightsData } from '../../api';

import Header from '../../atoms/Header';
import { RESET_STATE, UPDATE_FIELD } from '../../constants';
import { filterReducer, initialState } from '../../hooks/useFilterReducer';
import Content from '../../organisms/Content';
import Filters from '../../organisms/Filters';
import './HomeStyles.scss';
import { getFilteredData } from './HomeUtils';

function Home() {
  const [isOneWay, setOneWay] = React.useState(true);
  const [state, dispatch] = React.useReducer(filterReducer, initialState);
  const [flightState, setFlightDataState] = React.useState({
    isLoading: false,
    flightData: [],
    returnFlightData: [],
  });

  useEffect(() => {
    dispatch({
      type: RESET_STATE,
    });
  }, [isOneWay]);

  /**
   * Fetches flight data and sets it in state
   */
  const fetchFlightsInformation = async () => {
    const response = await fetchFlightsData();
    const filteredData = getFilteredData(response.data, state.data);
    setFlightDataState({
      ...flightState,
      isLoading: false,
      flightData: filteredData,
      returnFlightData: [],
    });
    if (!isOneWay) {
      const returnData = getFilteredData(response.data, state.data, true);
      setFlightDataState({
        ...flightState,
        isLoading: false,
        returnFlightData: returnData,
      });
    }
  };

  /**
   * Sets Flight data in Home State for Search trigger
   * @param {*} data
   */
  const onFlightSearch = (e) => {
    e.preventDefault();
    setFlightDataState({
      isLoading: true,
      flightData: [],
      returnFlightData: [],
    });
    fetchFlightsInformation();
  };

  /**
   * Handle Field Update on filters
   * @param {*} id
   * @param {*} value
   */
  const handleFieldUpdate = (id, value) => {
    dispatch({
      type: UPDATE_FIELD,
      payload: { id, updatedField: value },
    });
  };

  console.log(state);

  return (
    <>
      <Header />
      <div className="container">
        <div className="filters">
          <Filters
            isOneWay={isOneWay}
            setOneWay={setOneWay}
            flightState={state}
            onFlightSearch={onFlightSearch}
            handleFieldUpdate={handleFieldUpdate}
          />
        </div>
        <div className="content">
          <Content
            flightState={state}
            isLoading={flightState.isLoading}
            flightData={flightState.flightData}
            returnFlightData={flightState.returnFlightData}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
