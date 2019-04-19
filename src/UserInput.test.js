import React from 'react';
import { mount } from 'enzyme';
import App from './App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("user input", () => {

    // it('should allow a user to enter their name', () => {
    //     const input = mount(<App/>);
    //     const nameInput = input.find('LabelledInput').first().find('input');
    //
    //     expect(nameInput.props().value).toBeUndefined();
    //
    //     // nameInput.simulate('focus');
    //     nameInput.forEach((name) => {name.props().value = "foo"});
    //
    //     // nameInput.simulate('change',{target: {value: 'Bob Johnson'}});
    //
    //     input.update();
    //
    //     expect(nameInput.props().value).toEqual('foo');
    // });
    it('should allow a user to enter their name', () => {
        const input = mount(<App/>);
        const userInputs = input.find('input');
        const submitButton = input.find('input#blah')

        // expect(nameInput.props().value).toBeUndefined();

        // nameInput.simulate('focus');
        userInputs.forEach((name) => {name.props().value = "foo"});

        // nameInput.simulate('change',{target: {value: 'Bob Johnson'}});

        submitButton.simulate('click');
        input.update();

        // expect(userInputs.props().value).toBeUndefined();
        userInputs.forEach(input => {expect(input.props().value).toBeUndefined()})
    });
});