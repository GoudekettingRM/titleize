# Titleize JS ![Test thing](https://github.com/GoudekettingRM/titleize/workflows/Test%20thing/badge.svg)

## Installation

Run

```
npm i titleizejs
```

to install the module in your project.

## Capitalisation Rules in Titleize JS

By default Titleize JS:

- Removes all symbols in the provided string, _except apostrophes (')_ \*.
- Makes all words completely lower case and capitalises every first letter
- Always capitalises the first and last word of the string
- Does not capitalise the following words (articles, conjunctions, prepositions), unless they are the first or last word of the sentence:
  - a
  - an
  - the
  - and
  - but
  - or
  - nor
  - via
  - to
  - on
  - per
  - for
  - in
  - of
  - by
  - at
  - as
  - yet
  - so

\* Apostrophes are not removed, since they are vital in abbreviations, such as _don't_, _I'm_, and _you'd_.

## Not Yet Implemented

Support for the following is planned and wanted, but not yet present:

- Capitalisation of the first letter of each word in a hyphenated word.
- International (non-English) titleisation.

## Usage

First, require the module

```
const titleize = require('titleizejs');
```

Basic syntax of Titleize JS

```
titleize(string, options);
```

Example:

```
titleize('hello world'); // result: Hello World
```

## Options

So far, the options parameter is an object with three possible properties. These are:

- keepUpperCaseWords (`Boolean`, default: `false`, optional)
- keepUpperCaseLetters (`Boolean`, default: `false`, optional)
- ignoreSymbols (`String`, optional)

#### keepUpperCaseWords

Setting this to true will preserve all present words that are fully capitalised. This can be useful when dealing with abbreviations or acronyms.

```
titleize('hello WORLD', { keepUpperCaseWords: true }); // result: Hello WORLD
```

#### keepUpperCaseLetters

Setting this to true will preserve all present capital letters.

```
titleize('hello camelCase', { keepUpperCaseLetters: true }); // result: Hello CamelCase
```

#### ignoreSymbols

Providing a string to this setting will make sure that the provided symbols are not removed by Titleize JS. This string can contain many different symbols.

```
titleize('hello world! do you like javascript?', { ignoreSymbols: '!' })
    // result: Hello World! Do You Like Javascript

titleize('hello world! do you like javascript?', { ignoreSymbols: '?' })
    // result: Hello World Do You Like Javascript?

titleize('hello world! do you like javascript?', { ignoreSymbols: '!?' })
    // result: Hello World! Do You Like Javascript?
```

#### Support, bug-reports, feature suggestions

If you want to contribute, report a bug, or have a suggestion for a feature, contact me at robin@goudeketting.nl or contact me via Github or Twitter.
