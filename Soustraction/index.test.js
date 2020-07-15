const Soustraction = require('.');

test('Soustrait 24 par 17 pour obtenir 7', () => {
    expect(Soustraction(24, 17)).toBe(7);
});

test('Soustrait -24 par 17 pour obtenir -41', () => {
    expect(Soustraction(-24, 17)).toBe(-41);
});

test('Soustrait 24 par -17 pour obtenir 41', () => {
    expect(Soustraction(24, -17)).toBe(41);
});

test('Soustrait -24 par -17 pour obtenir -7', () => {
    expect(Soustraction(-24, -17)).toBe(-7);
});
