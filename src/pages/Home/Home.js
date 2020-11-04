import React from 'react';
import { fetchFlightsData } from '../../api';

import Header from '../../atoms/Header';
import { UPDATE_FIELD } from '../../constants';
import { filterReducer, initialState } from '../../hooks/useFilterReducer';
import Content from '../../organisms/Content';
import Filters from '../../organisms/Filters';
import './HomeStyles.scss';
import { getFilteredData } from './HomeUtils';
// import { getFilteredData } from './HomeUtils';

function Home() {
  const [isOneWay, setOneWay] = React.useState(true);
  const [state, dispatch] = React.useReducer(filterReducer, initialState);
  const [flightData, setFlightData] = React.useState([]);

  /**
   * Fetches flight data and sets it in state
   */
  const fetchFlightsInformation = async () => {
    const response = await fetchFlightsData();
    const filteredData = getFilteredData(response.data, state);
    setFlightData(filteredData);
  };

  /**
   * Sets Flight data in Home State for Search trigger
   * @param {*} data
   */
  const onFlightSearch = (e) => {
    e.preventDefault();
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
            isOneWay={isOneWay}
            flightState={state}
            flightData={flightData}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
