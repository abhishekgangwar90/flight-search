import React from 'react';
import { fetchFlightsData } from '../../api';

import Header from '../../atoms/Header';
import { UPDATE_FIELD } from '../../constants';
import { filterReducer, initialState } from '../../hooks/useFilterReducer';
import Content from '../../organisms/Content';
import Filters from '../../organisms/Filters';
import './HomeStyles.scss';
import { getFilteredData } from './HomeUtils';

function Home() {
  const [isOneWay, setOneWay] = React.useState(true);
  const [state, dispatch] = React.useReducer(filterReducer, initialState);
  const [flightData, setFlightData] = React.useState([]);
  const [returnFlightData, setReturnFlightData] = React.useState([]);

  /**
   * Fetches flight data and sets it in state
   */
  const fetchFlightsInformation = async () => {
    const response = await fetchFlightsData();
    const filteredData = getFilteredData(response.data, state.data);
    if (!isOneWay) {
      const returnData = getFilteredData(response.data, state.data, true);
      setReturnFlightData(returnData);
    }
    setFlightData(filteredData);
  };

  /**
   * Sets Flight data in Home State for Search trigger
   * @param {*} data
   */
  const onFlightSearch = (e) => {
    e.preventDefault();
    setFlightData([]);
    setReturnFlightData([]);
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
            flightState={state}
            flightData={flightData}
            returnFlightData={returnFlightData}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
