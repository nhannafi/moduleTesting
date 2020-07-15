const Multiplication = require('.');

test('Multiply 7 by 4 to get 28', () => {
    expect(Multiplication(7, 4)).toBe(28);
});

test('Multiply -7 by 4 to get -28', () => {
    expect(Multiplication(-7, 4)).toBe(-28);
});

test('Multiply 7 by -4 to get -28', () => {
    expect(Multiplication(7, -4)).toBe(-28);
});

test('Multiply -7 by -4 to get 28', () => {
    expect(Multiplication(-7, -4)).toBe(28);
});
