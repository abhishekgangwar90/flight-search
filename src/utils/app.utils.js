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
