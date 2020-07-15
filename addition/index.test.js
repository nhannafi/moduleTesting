const Addition = require('.');

test('Add 1 and 2 to get 3', () => {
    expect(Addition(1, 2)).toBe(3);
});

test('Add -1 et 2 to get 1', () => {
    expect(Addition(-1, 2)).toBe(1);
});

test('Add 1 et -2 to get à -1', () => {
    expect(Addition(1, -2)).toBe(-1);
});

test('Add -1 et -2 to get -1', () => {
    expect(Addition(-1, -2)).toBe(-3);
});
