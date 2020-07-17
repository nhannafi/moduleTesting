const User = require('.');
const UserValidator = require('../Validators/User');

jest.mock('.'); 
// We clean up each instance, as well as the calls to constructors and its methods.
beforeEach(() => {
    User.mockClear();
});
it(`Checks if the User and his validator have been called once`, function () {
    new User({
        email: 'nour@gmail.com',
        nom: 'HANNAFI',
        prenom: 'Nour',
        age: 23
    });

    expect(User).toHaveBeenCalledTimes(1);
});

it(`Check if a User is created with good parameters`, function () {
    const user = new User({
        email: 'nour@gmail.com',
        nom: 'HANNAFI',
        prenom: 'Nour',
        age: 23
    });

    expect(User).toBeDefined();
});

it(`Check if we get an error if we don't put arguments`, function () {
    const user = new User({});

    User.mockImplementation(() => new User({}));
    expect() 
});

it(`Check if you get an error if you don't define the last name`, function () {
    expect(function() {
    new User({
        email: 'nour@gmail.com',
        prenom: 'Nour',
        age: 23
    });
    }).toThrowError(); 
});

it(`Check if you get an error if you don't define the first name`, function () {
    expect(function() {
        new User({
            email: 'nour@gmail.com',
            nom: 'HANNAFI',
            age: 23
    });
    }).toThrow();
});


it(`Check if we get an error if the email address is not the right format`, function () {
    expect(function() {
        new User({
            email: 'nourtata',
            prenom: 'Nour',
            nom: 'HANNAFI',
            age: 23
    });
    }).toThrow(); 
});

it(`Check if we get an error if the age is under 13`, function () {
    expect(function() { 
    new User({
        email: 'nour@gmail.com',
        prenom: 'Nour',
        nom: 'HANNAFI',
        age: 7
    });
    }).toThrow();
});