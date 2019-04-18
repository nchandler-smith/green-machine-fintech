function validateSsn(inputValue) {
    const validSsnLength = 9;
    if(inputValue.length > validSsnLength) {
        return false
    }
    const reg = new RegExp(`[0-9]{${validSsnLength}}`);
    const containsNineDigits = reg.test(inputValue);
    return containsNineDigits;
}

export default validateSsn;