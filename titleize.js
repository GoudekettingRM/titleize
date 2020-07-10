const symbols = /[!¡⁄÷…æ«≤πø¬^˚¨∆¥˙†®´∑œåß∂ƒ∂©˙~µ∫√ç≈§±"#$%&'()*+,./:;<=>¿?@[\\\]^_`{|}~‹™›€£¢∞]/;
const lowerCasedWords = [
  'a',
  'an',
  'the',
  'and',
  'but',
  'or',
  'nor',
  'via',
  'to',
  'on',
  'per',
  'for',
  'in',
  'of',
  'by',
  'at',
  'as',
  'yet',
  'so',
];

const capitalize = (value) => {
  const splitValue = value.toString().split('');
  splitValue[0] = splitValue[0].toUpperCase();
  return splitValue.join('');
};

const cleanseSymbolList = (symbolsToIgnore, regex) => {
  symbolsToIgnore.split('').forEach((symbol) => {
    regex = regex.replace(new RegExp('[\\' + symbol + ']', 'g'), '');
  });

  return regex;
};

const titleize = (value, exceptions = {}) => {
  if (typeof value !== 'string') {
    try {
      throw new Error('No string was provided');
    } catch (err) {
      console.error(err.name, ':', err.message);
    }
  }

  const symbolsForRegex = exceptions.ignoreSymbols
    ? cleanseSymbolList(
        exceptions.ignoreSymbols,
        symbols.toString().slice(2, -2),
      )
    : symbols.toString().slice(2, -2);

  const symbolRegExp = new RegExp('[' + symbolsForRegex + ']', 'gi');

  if (
    !exceptions.ignoreSymbols ||
    !exceptions.ignoreSymbols.split('').includes('-')
  ) {
    value = value.replace(/-/g, ' ');
  }

  const valueArray = value
    .replace(symbolRegExp, '')
    .split(' ')
    .filter((word) => {
      if (word) return word;
    });

  return valueArray
    .map((word, index) => {
      if (word === word.toUpperCase() && exceptions.keepUpperCaseWords) {
        return word;
      } else if (exceptions.keepUpperCaseLetters) {
        return capitalize(word);
      } else if (index === 0 || index == valueArray.length - 1) {
        return capitalize(word.toLowerCase());
      } else if (lowerCasedWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
      } else {
        return capitalize(word.toLowerCase());
      }
    })
    .join(' ');
};

module.exports = titleize;
