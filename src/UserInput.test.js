import React from 'react';
import { mount } from 'enzyme';
import App from './App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("user input", () => {
    it('should clear the form when the user presses submit', () => {
        const input = mount(<App/>);
        const userInputs = input.find('input');
        const submitButton = input.find('button#blah');
        
        userInputs.forEach((name) => {name.simulate('change', {target: {value: 'foo'}})});
        const a = input.instance()

        expect(a.state.name1).toEqual('foo');
        submitButton.simulate('click');

        expect(a.state.name1).toBeNull();
        
    });
});