import React from 'react';
import FlightDetails from '../../atoms/FlightDetails';
import './FlightList.scss';

function FlightList() {
  const data = [
    {
      arrivalTime: '6:00',
      date: '2020/11/01',
      departureTime: '5:00',
      destination: 'Mumbai (BOM)',
      flightNo: 'AI-101',
      name: 'Air India',
      origin: 'Pune (PNQ)',
      price: 3525,
    },
    {
      arrivalTime: '9:50',
      date: '2020/11/01',
      departureTime: '7:20',
      destination: 'Delhi (DEL)',
      flightNo: 'AI-102',
      name: 'Air India',
      origin: 'Mumbai (BOM)',
      price: 5635,
    },
    {
      arrivalTime: '7:10',
      date: '2020/11/01',
      departureTime: '6:10',
      destination: 'Mumbai (BOM)',
      flightNo: 'AI-103',
      name: 'Air India',
      origin: 'Pune (PNQ)',
      price: 2537,
    },
  ];

  return (
    <div className="flightListContainer">
      {data.map((elm) => {
        return <FlightDetails key={elm.flightNo} {...elm} />;
      })}
    </div>
  );
}

export default FlightList;
