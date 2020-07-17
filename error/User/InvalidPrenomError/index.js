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
        /**
         * Class name
         * @type {string}
         */
        this.name = 'InvalidNomError';

        /**
         * error message
         * @type {string}
         */
        this.message = 'Nom invalide.';

        /**
         * Date when the error happens
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidNomError;
