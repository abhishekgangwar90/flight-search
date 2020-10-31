import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './index';
import { findByTestAttribute } from '../../utils/app.utils';

/**
 * Setting up the component
 * @param {*} props
 */
const setUpComponent = (props = {}) => {
  return shallow(<NotFoundPage {...props} />);
};

describe('Not Found Page', () => {
  let component;
  beforeAll(() => {
    component = setUpComponent();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should show the page not found text', () => {
    const wrapperText = findByTestAttribute(component, 'pageNotFound').text();
    expect(wrapperText).toBe('Page Not Found');
  });
});
