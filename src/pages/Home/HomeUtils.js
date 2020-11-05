/* eslint-disable import/prefer-default-export */

import { getTimeDiff } from '../../utils/app.utils';

const changeDateFormatToYYYYMMDD = (date) => {
  return date.toString().split('/').reverse().join('/');
};

const convertDate = (date) => {
  const dateArray = date.split('-');
  return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
};

const getLayoverFlights = (arr, origin, destination) => {
  const originArr = arr.filter((elm) => elm.origin === origin);
  const destArr = arr.filter((elm) => elm.destination === destination);
  const commonArr = [];

  originArr.forEach((elm) => ({
    ...destArr
      .filter((value) => elm.date === value.date)
      .filter((value) => value.origin === elm.destination)
      .filter((value) => {
        return getTimeDiff(elm.arrivalTime, value.departureTime) >= '00.30';
      })
      .forEach((value) => {
        commonArr.push({
          isLayoverFlight: true,
          date: elm.date,
          nDate: value.date,
          flightNo: elm.flightNo,
          name: elm.name,
          layoverName: value.name,
          layoverFlightNo: value.flightNo,
          origin: elm.origin,
          arrivalTime: elm.arrivalTime,
          departureTime: elm.departureTime,
          layover: value.origin,
          destination: value.destination,
          layoverDepartureTime: value.departureTime,
          layoverArrivalTime: value.arrivalTime,
          price: elm.price + value.price,
        });
      }),
  }));

  return commonArr;
};

export const getFilteredData = (
  responseData = [],
  filterState,
  isReturnFlight
) => {
  const modifiedOrigin = isReturnFlight
    ? filterState.destination
    : filterState.origin;
  const modifiedDestination = isReturnFlight
    ? filterState.origin
    : filterState.destination;

  const modifiedDate = isReturnFlight
    ? filterState.returnDate
    : filterState.departureDate;

  const directFlight = responseData.filter((elm) => {
    return (
      elm.origin === modifiedOrigin &&
      elm.destination === modifiedDestination &&
      changeDateFormatToYYYYMMDD(elm.date) === convertDate(modifiedDate)
    );
  });

  const layoverFlights = getLayoverFlights(
    responseData.filter(
      (elm) =>
        changeDateFormatToYYYYMMDD(elm.date) === convertDate(modifiedDate)
    ),
    modifiedOrigin,
    modifiedDestination
  );

  return [...directFlight, ...layoverFlights].map((elm) => {
    return {
      ...elm,
      price: elm.price * filterState.passengerCount,
    };
  });
};
