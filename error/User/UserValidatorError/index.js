/**
 * Error User invalide
 * @class UserValidatorError
 * @extends Error
 */
class UserValidatorError extends Error {

    /**
     * Singleton
     * @returns {UserValidatorError}
     */
    static singleton(errors) {
        return new this(errors);
    }

    /**
     * @constructor
     * @param params
     */
    constructor(errors = [], ...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UserValidatorError);
        }
        /**
         * Nom de la classe
         * @type {string}
         */
        this.name = 'UserValidatorError';

        /**
         * Message de l'erreur
         * @type {string}
         */
        this.message = '';
        for (
            let cursor = 0, cursorMax = errors.length;
            cursor < cursorMax;
            cursor++
        ) {
            const error = errors[cursor];
            this.message = this.message + "\n" + error.message;
        }

        /**
         * Date où l'erreur a été encourue
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = UserValidatorError;
