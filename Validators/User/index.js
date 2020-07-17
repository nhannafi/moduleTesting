const InvalidEmailError = require('../../Error/User/InvalidEmailError');
const InvalidNomError = require('../../Error/User/InvalidNomError');
const InvalidPrenomError = require('../../Error/User/InvalidPrenomError');
const InvalidAgeError = require('../../Error/User/InvalidAgeError');
const UserValidatorError = require('../../Error/User/UserValidatorError');

/**
 * @class UserValidator
 */
class UserValidator {

    /**
     * @constructor
     * @param params
     * @param params.email {string}
     * @param params.nom {string} Nom
     * @param params.prenom {string} Prenom
     * @param params.age
     */
    constructor(params) {

        this.isValid = false;
        this.errors = [];

        const {email, nom, prenom, age} = params;

        const conditions = {
            'email': function (email) {
                return UserValidator.siPasVide(email)
                    && UserValidator.siEmailValide(email);
            }(email),
            'nom': function (nom) {
                return UserValidator.siPasVide(nom)
                    && (nom, 3, 64);
            }(nom),
            'prenom': function (prenom) {
                return UserValidator.siPasVide(prenom);
            }(prenom),
            'age': function (age) {
                return UserValidator.siPasVide(age)
                    && 13 <= age;
            }(age)
        };

        const errors = {
            'email': InvalidEmailError,
            'nom': InvalidNomError,
            'prenom': InvalidPrenomError,
            'age': InvalidAgeError
        };

        // We recover the values ​​of each check and we check if a false is returned.
        // If yes we add the errors in a stack of messages.
        const _conditionsValues = Object.values(conditions);
        if (_conditionsValues.includes(false)) {
            for (let cursor in errors) {
                const error = errors[cursor];
                if (error.hasOwnProperty('singleton')) {
                    this.errors.push(error.singleton());
                }
            }
            throw UserValidatorError.singleton(this.errors);
        }

        this.isValid = true;

    }

    static siPasVide(valeur) {
        return false === [undefined, null, ''].includes(valeur);
    }

    static siEmailValide(valeur) {
        const expression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const verification = expression.test(valeur);
        return true === verification;
    }

    get isValid() {
        return this._isValid;
    }

    set isValid(value) {
        if ([true, false].includes(value)) {
            this._isValid = value;
        }
    }

}

module.exports = UserValidator;
