import React from 'react';
import { fetchFlightsData } from '../../api';

import Header from '../../atoms/Header';
import Content from '../../organisms/Content';
import Filters from '../../organisms/Filters';
import './HomeStyles.scss';

function Home() {
  const [isOneWay, setOneWay] = React.useState(true);
  const [flightState, setFlightState] = React.useState({
    origin: '',
    destination: '',
    travelDate: '',
    returnDate: '',
  });
  const [flightData, setFlightData] = React.useState([]);

  const onFlightSearch = async (data) => {
    setFlightState({
      ...flightState,
      origin: data.origin,
      destination: data.destination,
      travelDate: data.departureDate,
      ...(data.returnDate && { returnDate: data.returnDate }),
    });
    const res = await fetchFlightsData();
    setFlightData(res.data);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="filters">
          <Filters
            isOneWay={isOneWay}
            setOneWay={setOneWay}
            onFlightSearch={onFlightSearch}
          />
        </div>
        <div className="content">
          <Content
            isOneWay={isOneWay}
            flightState={flightState}
            flightData={flightData}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
