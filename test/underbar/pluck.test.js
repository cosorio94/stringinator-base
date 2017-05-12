const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    let people = [
    {name: 'Carlos', age: 23},
    {name: 'Pablo', age: 21},
    {name: 'Diana', age: 20}];

    expect(_.pluck(people, 'age')).toEqual([23, 21, 20]);
  });

});