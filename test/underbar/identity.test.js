const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(4)).toBe(4);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([4,3,2])).toEqual([4,3,2]);
  });

  it('returns the same object if given an object', () => {
    let obj = {
      name: 'Carlos',
      job: 'Chill'
    };

    expect(_.identity(obj)).toEqual(obj);
  });
});