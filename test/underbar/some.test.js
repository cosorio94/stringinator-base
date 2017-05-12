const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    expect(_.some([2, 4, 5, 6], a => a % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    expect(_.some([2, 4, 6, 8], a => a % 2 === 1)).toBe(false);
  });

});