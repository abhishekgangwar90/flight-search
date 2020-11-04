/* eslint-disable import/prefer-default-export */
/**
 * Returns a wrapper with the selected test attribute
 * @param {*} component
 * @param {*} attr
 */
export const findByTestAttribute = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};

export const currencySeparator = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getTimeDiff = (start, end) => {
  const firstFlightArrivalTime = start.split(':');
  const secondFlightDepartureTime = end.split(':');
  const hours = `${
    secondFlightDepartureTime[0] - firstFlightArrivalTime[0]
  }`.padStart(2, '0');
  const minutes = `${
    secondFlightDepartureTime[1] - firstFlightArrivalTime[1]
  }`.padStart(2, '0');
  return `${hours}.${minutes}`;
};
