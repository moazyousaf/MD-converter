const test = require('node:test');
const { convertMarkdown } = require('./converter');

describe('conversion tests with limit cases', () => {
  test('Test with a number as input', () => {
    expect(convertMarkdown(1)).toBe('');
  });

  test('Test with an empty string', () => {
    expect(convertMarkdown('')).toBe('');
  });

  test('Test with a simple markdown', () => {
    expect(convertMarkdown('# Titolo')).toBe('<h1 id="titolo">Titolo</h1>');
  });
});
