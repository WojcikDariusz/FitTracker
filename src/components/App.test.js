import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configure, shallow} from "enzyme";
import adapter from "enzyme-adapter-react-16";

configure({adapter: new adapter()})

describe('App tests', () => {

  it('Component App rendered correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Fit tracker app text rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('i').text()).toBe('Fit Tracker App');
  });
});


