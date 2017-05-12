const _ = require('./underbar');

const first = function(str, n) {
  charResult = _.first(str.split(''), n);
  return charResult.length === 1 ? charResult : charResult.join('');
};

const last = function(str, n) {
  charResult = _.last(str.split(''), n);
  return charResult.length === 1 ? charResult : charResult.join('');
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return _.reject(str.split(''), a => a === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str.split(''), a => a === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), a => !isNaN(a));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str.split(''), a => !isNaN(parseFloat(a))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  return _.map(obj, (item) => truncateString(item, maxLength));
};

const countChars = function(str) {
  let charCount = {};
  _.each(str.split(''), (char) => {
    if (char in charCount) {
      charCount[char]++;
    } else{
      charCount[char] = 1;
    }
  });
  return charCount;
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};