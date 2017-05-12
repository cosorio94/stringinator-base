const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    expect(_.reduce([1, 4, 6], (a, b) => a + b, 5)).toBe(16);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    expect(_.reduce([1, 4, 6], (a, b) => a + b)).toBe(11);
  });

});