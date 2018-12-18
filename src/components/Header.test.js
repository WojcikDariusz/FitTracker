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

    it('Renders the text', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h2').text()).toBe('I AM THE BEST');
        wrapper.setState({
            nameOfTracker : "BEST TRACKING APP"
        });
        expect(wrapper.find('h2').text()).toBe('BEST TRACKING APP');
    });

    it('Checking if handleClick method works correctly, simulate changes after clicking Header DIV', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.state().nameOfTracker).toBe('I AM THE BEST');
        
        wrapper.find('.header').simulate('click');
        expect(wrapper.state().nameOfTracker).toBe('BEST TRACKING APP')
    });

    it('Snapshot matches', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});