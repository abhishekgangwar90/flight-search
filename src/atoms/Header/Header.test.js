import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttribute } from '../../utils/app.utils';
import Header from './index';

/**
 * Setting up the component
 * @param {*} props
 */
const setUpComponent = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe('Header Component', () => {
  let component;
  beforeAll(() => {
    component = setUpComponent();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render without fail', () => {
    const wrapper = findByTestAttribute(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render app title', () => {
    const wrapperText = findByTestAttribute(
      component,
      'headerComponent'
    ).text();
    expect(wrapperText).toBe('Flight Search Application');
  });
});
