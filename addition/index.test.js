const Addition = require('.');

test('Additionne 1 et 2 pour arriver à 3', () => {
    expect(Addition(1, 2)).toBe(3);
});

test('Additionne -1 et 2 pour arriver à 1', () => {
    expect(Addition(-1, 2)).toBe(1);
});

test('Additionne 1 et -2 pour arriver à -1', () => {
    expect(Addition(1, -2)).toBe(-1);
});

test('Additionne -1 et -2 pour arriver à -1', () => {
    expect(Addition(-1, -2)).toBe(-3);
});
