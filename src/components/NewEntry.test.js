import React from 'react';
import ReactDOM from 'react-dom';
import NewEntry from './NewEntry';
import {configure,shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe('New Entry tests', () => {

    it('Correctly renders the header html', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewEntry />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the text', () => {
        const wrapper = shallow(<NewEntry />);
        expect(wrapper.find('p').text()).toBe('NewEntry');
    });

});