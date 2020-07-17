/**
 * Error age invalide
 * @class InvalidPrenomError
 * @extends Error
 */
class InvalidAgeError extends Error {

    /**
     * Singleton
     * @returns {InvalidAgeError}
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

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidAgeError);
        }
        /**
         * Name class
         * @type {string}
         */
        this.name = 'InvalidAgeError';

        /**
         * Error message
         * @type {string}
         */
        this.message = 'Age invalide.';

        /**
         * Date when the error happens
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidAgeError;
