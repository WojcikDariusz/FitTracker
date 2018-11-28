import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configure, shallow} from "enzyme";
import adapter from "enzyme-adapter-react-16";

configure({adapter: new adapter()})

describe('App tests', () => {

  it('Component App rendered correctly', () => {
    const div = document.createElement('divs');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Render hello world correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('i').text()).toBe('Fit Tracker App');
  });
});


