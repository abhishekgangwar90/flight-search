import React from 'react';

import Header from '../../atoms/Header';
import Filters from '../../organisms/Filters';
import './FlightListStyles.scss';

function FlightListPage() {
  const [isOneWay, setOneWay] = React.useState(true);

  return (
    <>
      <Header />
      <div className="container">
        <div className="filters">
          <Filters isOneWay={isOneWay} setOneWay={setOneWay} />
        </div>
        <div className="content">content</div>
      </div>
    </>
  );
}

export default FlightListPage;
