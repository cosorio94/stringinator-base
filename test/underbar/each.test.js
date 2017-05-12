const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    let arr = [1, 3, 5];
    let count = 0;

    _.each(arr, (value, index, obj) => {
      expect(obj[index]).toEqual(value);
      count++;
    });

    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    let obj = {
      length: 3,
      0: 23,
      1: 43,
      2: 69
    };
    let count = 0;

    _.each(obj, (value, index, obj) => {
      expect(obj[index]).toEqual(value);
      count++;
    });

    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    let obj = {
      car: 'BMW',
      color: 'blue',
      year: 2002
    };
    let count = 0;

    _.each(obj, (value, index, obj) => {
      expect(obj[index]).toEqual(value);
      count++;
    });

    expect(count).toBe(3);
  });
});

