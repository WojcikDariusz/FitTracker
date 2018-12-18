import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Dashboard from './Dashboard';
import NewEntry from './NewEntry';

import {configure, shallow} from "enzyme";
import adapter from "enzyme-adapter-react-16";

configure({adapter: new adapter()})

describe('App tests', () => {

  it('Correctly renders the app html', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


  it('Fit tracker app text rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
    expect(wrapper.find('Dashboard').exists()).toBe(true);
    expect(wrapper.find('NewEntry').exists()).toBe(true);
  });

  it('Snapshot matches', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

});


