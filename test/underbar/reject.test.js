const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    expect(_.reject([2, 3, 4, 5, 6], a => a % 2 === 1)).toEqual([2, 4, 6]);
  });

  it('rejects null values from an object', () => {
    obj = {
      1: 23,
      2: 'lol',
      3: null,
      4: null
    };

    expect(_.reject(obj, a => a === null)).toEqual([23, 'lol']);
  });
});