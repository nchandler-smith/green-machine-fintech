import React from 'react';
import { mount } from 'enzyme';
import App from './App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { store } from './store/index'

Enzyme.configure({ adapter: new Adapter() });

describe("user input", () => {
    it('should clear the form when the user presses submit', () => {
        const input = mount(<Provider store={store}><App/></Provider>);
        const userInputs = input.find('input');
        const submitButton = input.find('#submitButton');

        const cardHolderName = userInputs.find('#cardHolderName');
        cardHolderName.simulate('change', {target: {value: 'Jonathan Dough'}});

        const ssn = userInputs.find('#ssn');
        ssn.simulate('change', {target: {value: '123456789'}});
        
        const merchantName = userInputs.find('#merchantName');
        merchantName.simulate('change', {target: {value: 'Natorade'}});
        
        const instanceData = input.instance()
        console.log(instanceData.state)

        expect(instanceData.state.cardHolderName).toEqual('Jonathan Dough');
        expect(instanceData.state.ssn).toEqual('123456789');
        expect(instanceData.state.merchantName).toEqual('Natorade');
        submitButton.simulate('click');

        expect(instanceData.state.name1).toBeNull();
        
    });
});