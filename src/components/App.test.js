import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('App test', () => {
  const wrapper = shallow(<App />);
  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
