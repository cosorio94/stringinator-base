const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    expect(_.uniq([1, 2, 1, 4, 5, 2])).toEqual([1, 2, 4, 5]);
  });
});