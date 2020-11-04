/* eslint-disable import/prefer-default-export */

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
        const firstFlightArrivalTime = elm.arrivalTime.split(':');
        const secondFlightDepartureTime = value.departureTime.split(':');
        const diff = `${
          secondFlightDepartureTime[0] - firstFlightArrivalTime[0]
        }:${secondFlightDepartureTime[1] - firstFlightArrivalTime[1]}`;
        return diff >= '0:30';
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

export const getFilteredData = (responseData = [], filterState) => {
  const directFlight = responseData.filter((elm) => {
    return (
      elm.origin === filterState.origin &&
      elm.destination === filterState.destination &&
      changeDateFormatToYYYYMMDD(elm.date) ===
        convertDate(filterState.departureDate)
    );
  });

  const layoverFlights = getLayoverFlights(
    responseData,
    filterState.origin,
    filterState.destination
  );

  return [...directFlight, ...layoverFlights];
};
