const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    expect(_.contains([1,4,5], 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    expect(_.contains([1,4,5], 2)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    obj = {
      drink: 'martini',
      style: 'stirred, not shaken'
    };

    expect(_.contains(obj, 'martini')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    obj = {
      drink: 'martini',
      style: 'stirred, not shaken'
    };

    expect(_.contains(obj, 'shaken')).toBe(false);
  });

});