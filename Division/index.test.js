const Division = require('.');
const DividedByZeroError = require('../Errors/DividedByZeroError');



test('Divise 36 by 6 to get 6', () => {
    expect(Division(36, 6)).toBe(6);
});

test('Divise -36 by 6 to get -6', () => {
    expect(Division(-36, 6)).toBe(-6);
});

test('Divise 36 by -6 to get -6', () => {
    expect(Division(36, -6)).toBe(-6);
});

test('Divise -36 by -6 to get 6', () => {
    expect(Division(-36, -6)).toBe(6);
});

test('Divide a positive number by zero to get an error.', () => {
    expect(() => Division(Math.floor(Math.random() * 100) + 1, 0)).toThrow(DividedByZeroError);
});

test('Divise un nombre négatif by zero afin d\'obtenir une erreur.', () => {
    expect(() => Division((Math.floor(Math.random() * 100) + 1) * -1, 0)).toThrow(DividedByZeroError);
});
