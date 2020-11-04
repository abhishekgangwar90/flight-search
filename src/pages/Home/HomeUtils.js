/* eslint-disable import/prefer-default-export */
export const getFilteredData = (responseData = [], filterState) => {
  return responseData.filter(
    (elm) =>
      elm.origin === filterState.origin &&
      elm.destination === filterState.destination
    //   elm.travelDate === filterState.travelDate
  );
};
