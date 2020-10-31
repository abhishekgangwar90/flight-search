/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttribute } from './utils/app.utils';

/**
 * Setting up the component
 * @param {*} props
 */
const setUpComponent = (props = {}) => {
  return shallow(<App {...props} />);
};

describe('App Component', () => {
  let component;
  beforeAll(() => {
    component = setUpComponent();
  });

  it('Should render the App without fail', () => {
    const element = findByTestAttribute(component, 'appComponent');
    expect(element.length).toBe(1);
  });
});
