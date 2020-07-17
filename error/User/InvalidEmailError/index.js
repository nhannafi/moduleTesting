/**
 * Error adress mail invalid
 * @class InvalidEmailError
 * @extends Error
 */
class InvalidEmailError extends Error {

    /**
     * Singleton
     * @returns {InvalidEmailError}
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
            Error.captureStackTrace(this, InvalidEmailError);
        }
        /**
         * name class
         * @type {string}
         */
        this.name = 'InvalidEmailError';

        /**
         * error message
         * @type {string}
         */
        this.message = 'Adresse mail invalide.';

        /**
         * Date when the error happens
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidEmailError;
