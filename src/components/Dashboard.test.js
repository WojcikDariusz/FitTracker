import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import {configure,shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe('Dashboard tests', () => {

    it('Correctly renders the dashboard html', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot matches', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper).toMatchSnapshot();
    });
});

