/**
 * Error Division by zero
 * @class DividedByZeroError
 * @extends Error
 */
class DividedByZeroError extends Error {

    /**
     * Singleton
     * @returns {DividedByZeroError}
     */
    static singleton() {
        return new this;
    }

    /**
     * @constructor
     * @param params
     */
    constructor(...params) {
        super(...params);

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, DividedByZeroError);
        }
        /**
         * name class
         ** @type {string}
         */
        this.name = 'DividedByZeroError';

        /**
         * Error message
         * @type {string}
         */
        this.message = 'Division by zero encountered.';

    }
}
module.exports = DividedByZeroError;
