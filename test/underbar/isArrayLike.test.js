const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([2,3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    let obj = {
      length: 1
    };

    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    let obj = {
      meme: 'u lift bro'
    };

    expect(_.isArrayLike(obj)).toBe(false);
  });
});
