const setCardHolderName = (cardholderName) => (
    {
        type: 'UPDATE-CARD-HOLDER-NAME',
        payload: cardholderName
    }
)

const setSsn = (ssn) => (
    {
        type: 'UPDATE-SSN',
        payload: ssn
    }
)

const setMerchantname = (merchantName) => (
    {
        type: 'UPDATE-MERCHANT-NAME',
        payload: merchantName
    }
)

export { setCardHolderName, setSsn, setMerchantname }