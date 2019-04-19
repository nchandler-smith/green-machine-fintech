import React from 'react';
import { mount } from 'enzyme';
import App from './App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("user input", () => {
    it('should allow a user to enter their name', () => {
        const input = mount(<App/>);
        let userInputs = input.find('input');
        const submitButton = input.find('#blah')
        
        userInputs.forEach((name) => {name.props().value = "foo"});

        submitButton.simulate('click');

        input.update();
        userInputs = input.find('input');
        userInputs.forEach(input => expect(input.props().value).toBeUndefined())
        
    });
});