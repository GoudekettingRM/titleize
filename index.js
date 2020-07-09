const symbols = /[!¡⁄÷…æ«≤πø¬^˚¨∆¥˙†®´∑œåß∂ƒ∂©˙~µ∫√ç≈§±"#$%&'()*+,-./:;<=>¿?@[\\\]^_`{|}~‹™›€£¢∞]/;

const capitalize = (value) => {
  const splitValue = value.toString().split('');
  splitValue[0] = splitValue[0].toUpperCase();
  return splitValue.join('');
};

const cleanseSymbolList = (symbolsToIgnore) => {
  let symbolsForRegex = symbols.toString().slice(2, -2);

  const symArr = symbolsToIgnore.split('');

  symArr.forEach((symbol) => {
    symbolsForRegex = symbolsForRegex.replace(
      new RegExp('[\\' + symbol + ']', 'g'),
      '',
    );
  });

  return symbolsForRegex;
};

const titleize = (value, exceptions = {}) => {
  const symbolsForRegex = exceptions.ignoreSymbols
    ? cleanseSymbolList(exceptions.ignoreSymbols)
    : symbols.toString().slice(2, -2);

  const symbolRegExp = new RegExp('[' + symbolsForRegex + ']', 'gi');

  return value
    .toString()
    .replace(symbolRegExp, '')
    .split(' ')
    .filter((word) => {
      if (word) return word;
    })
    .map((word) =>
      word === word.toUpperCase() && exceptions.keepUpperCaseWords
        ? word
        : exceptions.keepUpperCaseLetters
        ? capitalize(word)
        : capitalize(word.toLowerCase()),
    )
    .join(' ');
};

module.exports = titleize;
