// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0,n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0));
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for (let index = fromIndex; index < array.length; index++){
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
};

const isArrayLike = function(obj) {
  return typeof obj.length === 'number' && obj.length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if (isArrayLike(obj)) {
    for (let i = 0; i < obj.length; i++){
      callback(obj[i], i, obj);
    }
  } else{
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  let arr = [];
  each(obj, (value, index, obj) => {
    arr.push(callback(value, index, obj));
  });
  return arr;
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  return map(obj, (item) => item[key]);
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  let accumulator = initialValue;
  let isNotInitialized = (accumulator === undefined);
  each(obj, (value, index, obj) => {
    if (isNotInitialized) {
      accumulator = value;
      isNotInitialized = false;
    } else{
      accumulator = callback(accumulator, value, index, obj);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  return reduce(obj, (wasFound, currentValue) => {
    return wasFound || currentValue === target;
  }, false);
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  return reduce(obj, (everyCount, currentValue, currentIndex, obj) => {
    return everyCount && !!callback(currentValue, currentIndex, obj);
  }, true);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  return reduce(obj, (somePassed, currentValue, currentIndex, obj) => {
    return somePassed || !!callback(currentValue, currentIndex, obj);
  }, false);
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  let result = [];
  each(obj, (currentValue, currentIndex, obj) => {
    if (callback(currentValue, currentIndex, obj)) {
      result.push(currentValue);
    }
  });
  return result;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  let result = [];
  each(arr, (currentValue, currentIndex, arr) => {
    if (!callback(currentValue, currentIndex, arr)) {
      result.push(currentValue);
    }
  });
  return result;
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  let found = {};
  return filter(obj, (item, currentKey, obj) => {
    return !(item in found) && (found[item] = true);
  });
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
