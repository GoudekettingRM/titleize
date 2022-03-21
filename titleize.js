/* Titleize JS © https://github.com/GoudekettingRM/titleize && Robin Goudeketting */

const symbols = /[!¡⁄÷…æ«≤πø¬^˚¨∆¥˙†®´∑œåß∂ƒ∂©˙~µ∫√ç≈§±"#$%&()*+,./:;<=>¿?@[\\\]^_`{|}~‹™›€£¢∞]/;
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
  'onto',
  'per',
  'for',
  'in',
  'into',
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

const getWordForTitle = (word, index, array, exceptions = {}) => {
  if (word === word.toUpperCase() && exceptions.keepUpperCaseWords) {
    return word;
  } else if (exceptions.keepUpperCaseLetters) {
    return capitalize(word);
  } else if (index === 0 || index == array.length - 1) {
    return capitalize(word.toLowerCase());
  } else if (lowerCasedWords.includes(word.toLowerCase())) {
    return word.toLowerCase();
  } else {
    return capitalize(word.toLowerCase());
  }
};

const titleize = (value, exceptions = {}) => {
  if (typeof value !== 'string') {
    try {
      throw new TypeError('No string was provided');
    } catch (err) {
      console.error(err.name + ':', err.message);
      throw err;
    }
  } else if (!value) {
    try {
      throw new Error('Empty string provided');
    } catch (err) {
      console.error(err.name + ':', err.message);
      throw err;
    }
  }
  const symbolsForRegex = exceptions.ignoreSymbols
    ? cleanseSymbolList(
        exceptions.ignoreSymbols,
        symbols.toString().slice(2, -2),
      )
    : symbols.toString().slice(2, -2);

  const symbolRegExp = new RegExp('[' + symbolsForRegex + ']', 'gi');

  if (exceptions.isSlug) {
    value = value.replace(/-/g, ' ');
  }

  return value
    .replace(symbolRegExp, '')
    .split(' ')
    .filter((word) => {
      if (word) return word;
    })
    .map((word, index, array) => {
      const regex = /([\w+])-([\w+])/gi
      const matches = [];
      while (true) {
        const match = regex.exec(word);
        if (!match) break;
        matches.push(match[match[1] ? 1 : 2]);
      }

      if (exceptions.isSlug) {
        return getWordForTitle(word, index, array, exceptions);
      } else if (
        word.indexOf('-') !== -1 &&
        word.length >= 3 &&
        // word.match(/(?<=[\w+])-(?=[\w+])/gi)
        matches.length
      ) {
        return word
          .split('-')
          .map((w) => {
            return getWordForTitle(w, index, array, exceptions);
          })
          .join('-');
      } else if (
        (word.indexOf('-') !== -1 && word.length < 3) ||
        (word.indexOf('-') !== -1 &&
          word.length >= 3 &&
          // !word.match(/(?<=[\w+])-(?=[\w+])/gi)
          !matches.length
          )
      ) {
        const v = word.replace(/-/g, '');
        if (v.length > 0) {
          return getWordForTitle(
            word.replace(/-/g, ''),
            index,
            array,
            exceptions,
          );
        }
      } else {
        return getWordForTitle(word, index, array, exceptions);
      }
    })
    .join(' ')
    .trim();
};

module.exports = titleize;

/*
     /\    /\
     \ \__/ /
     (ಠ _ ಠ)
_____(_____)____
|     Robin    |
| Goudeketting_|
*/
