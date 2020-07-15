
const DividedByZeroError = require('../Errors/DividedByZeroError');

/**
 * @param a number
 * @param b number
 * @return {number}
 * @throws DividedByZeroError
 */
function Division (a, b) {

    if (0 === b) {
        throw DividedByZeroError.singleton();
    }

    return a / b;
}

module.exports = Division;
