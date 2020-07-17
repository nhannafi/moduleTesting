const UserValidator = require('../Validators/User');
const UserValidatorError = require('../Error/UserValidatorError');

/**
 * @class User
 */
class User {

    /**
     * @constructor
     * @param params
     * @param params.email
     * @param params.nom
     * @param params.prenom
     * @param params.age
     */
    constructor(params) {

        let validator;

        try {
            validator = new UserValidator(params);
        }
        catch (error) {
            throw error;
        }

        this.validator = validator;

        const {
            email,
            nom,
            prenom,
            age
        } = params;

        /**
         * Adresse mail
         * @type {string}
         */
        this.email = email;

        /**
         * Nom
         * @type {string}
         */
        this.nom = nom;

        /**
         * Prenom
         * @type {string}
         */
        this.prenom = prenom;

        /**
         * Age
         * @type {string}
         */
        this.age = age;

    }

}

module.exports = User;
