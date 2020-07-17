const User = require('.');
const UserValidator = require('../Validators/User');

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
    const User = new User({
        email: 'nour@gmail.com',
        nom: 'HANNAFI',
        prenom: 'Nour',
        age: 23
    });

    expect(User).toBeDefined();
});

it(`Check if we get an error if we don't put arguments`, function () {
    expect(() => new User({})).toThrow(); 
});

it(`Check if you get an error if you don't define the last name`, function () {
    expect(() => new User({
        email: 'nour@gmail.com',
        prenom: 'Nour',
        age: 23
    })).toThrow(); 
});

it(`Check if you get an error if you don't define the first name`, function () {
    expect(() => new User({
        email: 'nour@gmail.com',
        nom: 'HANNAFI',
        age: 23
    })).toThrow();
});


it(`Check if we get an error if the email address is not the right format`, function () {
    expect(() => new User({
        email: 'nourtata',
        prenom: 'Nour',
        nom: 'HANNAFI',
        age: 23
    })).toThrow(); 
});

it(`Check if we get an error if the age is under 13`, function () {
    expect(() => new User({
        email: 'nour@gmail.com',
        prenom: 'Nour',
        nom: 'HANNAFI',
        age: 7
    })).toThrow();
});


