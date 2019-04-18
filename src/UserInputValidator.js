// class UserInputValidator {

//     validateSsn(inputValue) {
//         return true;
//     }
// }

function validateSsn(inputValue) {
    const reg = new RegExp('[0-9]{9}');
    const result = inputValue.search(reg);


    return (inputValue.length === 9) && (result === 0);
}

export default validateSsn;