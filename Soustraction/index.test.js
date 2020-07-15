const Soustraction = require('.');

test('Subtract 24 by 17 to get 7', () => {
    expect(Soustraction(24, 17)).toBe(7);
});

test('Subtract -24 by 17 to get -41', () => {
    expect(Soustraction(-24, 17)).toBe(-41);
});

test('Subtract 24 by -17 to get 41', () => {
    expect(Soustraction(24, -17)).toBe(41);
});

test('Subtract -24 by -17 to get -7', () => {
    expect(Soustraction(-24, -17)).toBe(-7);
});
