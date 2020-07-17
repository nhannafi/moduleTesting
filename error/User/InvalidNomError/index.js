/**
 * Error nom invalide
 * @class InvalidNomError
 * @extends Error
 */
class InvalidNomError extends Error {

    /**
     * Singleton
     * @returns {InvalidNomError}
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
            Error.captureStackTrace(this, InvalidNomError);
        }
        /**Name class
         * @type {string}
         */
        this.name = 'InvalidNomError';

        /**
         * Error message
         * @type {string}
         */
        this.message = 'Nom invalide.';

        /**
         * Date where the the error happens
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidNomError;
