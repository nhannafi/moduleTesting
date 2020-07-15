const Multiplication = require('.');

test('Multiplie 7 par 4 pour obtenir 28', () => {
    expect(Multiplication(7, 4)).toBe(28);
});

test('Multiplie -7 par 4 pour obtenir -28', () => {
    expect(Multiplication(-7, 4)).toBe(-28);
});

test('Multiplie 7 par -4 pour obtenir -28', () => {
    expect(Multiplication(7, -4)).toBe(-28);
});

test('Multiplie -7 par -4 pour obtenir 28', () => {
    expect(Multiplication(-7, -4)).toBe(28);
});
