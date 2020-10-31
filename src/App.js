import React from 'react';
import './App.scss';
import FlightListPage from './pages/FlightListPage';

function App() {
  return (
    <div className="App" data-test="appComponent">
      <FlightListPage />
    </div>
  );
}

export default App;
