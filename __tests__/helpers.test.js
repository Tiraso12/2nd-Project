const { format_plural } = require('../utils/helpers');

test('format_plural() returns a pural noun', () => {
    const noun = 'thing';
    const amount = 2;

    expect(format_plural(noun, amount)).toBe('things');
});

test('format_plural() returns a singular noun', () => {
    const noun = 'thing';
    const amount = 1;

    expect(format_plural(noun, amount)).toBe('thing');
});