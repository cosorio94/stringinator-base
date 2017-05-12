const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    expect(_.filter([2, 3, 4, 5, 6], (a) => a % 2 === 1)).toEqual([3, 5]);
  });

  it('filters an object to only numeric values', () => {
    let obj = {
      game: 'Zelda',
      rating: 10,
      year: 2017,
      wows: 1000
    };

    expect(_.filter(obj, a => !isNaN(a))).toEqual([10, 2017, 1000]);
  });
});