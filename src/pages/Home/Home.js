import React from 'react';

import Header from '../../atoms/Header';
import Content from '../../organisms/Content';
import Filters from '../../organisms/Filters';
import './HomeStyles.scss';

function Home() {
  const [isOneWay, setOneWay] = React.useState(true);

  return (
    <>
      <Header />
      <div className="container">
        <div className="filters">
          <Filters isOneWay={isOneWay} setOneWay={setOneWay} />
        </div>
        <div className="content">
          <Content isOneWay={isOneWay} />
        </div>
      </div>
    </>
  );
}

export default Home;
