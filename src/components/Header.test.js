import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {configure,shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe('Header tests', () => {

    it('Correctly renders the header html', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the text', () => {
        const textCheck = shallow(<Header />);
        expect(textCheck.find('p').text()).toBe('Header');
    });

});