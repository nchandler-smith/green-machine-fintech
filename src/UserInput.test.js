import React from 'react';
import { mount } from 'enzyme';
import App from './App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("user input", () => {
    it('should clear the form when the user presses submit', () => {
        const input = mount(<App/>);
        const submitButton = input.find('button#blah');
        const userInputs = input.find('input');

        const cardHolderName = userInputs.find('#cardHolderName');
        cardHolderName.simulate('change', {target: {value: 'Jonathan Dough'}});

        const ssn = userInputs.find('#ssn');
        ssn.simulate('change', {target: {value: '123456789'}});
        
        const merchantName = userInputs.find('#merchantName');
        merchantName.simulate('change', {target: {value: 'Natorade'}});
        
        const instanceData = input.instance()

        expect(instanceData.state.cardHolderName).toEqual('Jonathan Dough');
        expect(instanceData.state.ssn).toEqual('123456789');
        expect(instanceData.state.merchantName).toEqual('Natorade');
        submitButton.simulate('click');

        expect(instanceData.state.name1).toBeNull();
        
    });
});