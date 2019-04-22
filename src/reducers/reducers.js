let defaultState = {
    cardHolderName: "",
    ssn: "",
    merchantName: ""
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE-CARD-HOLDER-NAME':
            return {
                ...state,
                cardHolderName: action.payload
            }
        case 'UPDATE-SSN':
            return {
                ...state,
                ssn: action.payload
            }
        case 'UPDATE-MERCHANT-NAME':
            return {
                ...state,
                merchantName: action.payload
            }
    default: return state;
    }
}

export default reducers;