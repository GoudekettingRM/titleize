![Node.js CI](https://github.com/GoudekettingRM/titleize/workflows/Node.js/badge.svg)

<a href="https://www.buymeacoffee.com/goudekettingrm" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>

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
- Capitalises the all words in hyphenated words
- Always capitalises the first and last word of the string
- Does not capitalise the following words (articles, conjunctions, prepositions), unless they are the first or last word of the sentence:
  - a, an, the
  - and, but, or, nor
  - via, to, on, onto, in, into
  - per, for, of, by
  - at, as, yet, so

\* Apostrophes are not removed, since they are vital in abbreviations, such as _don't_, _I'm_, and _you'd_.

## Not Yet Implemented

Support for the following is planned and wanted, but not yet present:

- International (non-English) titleisation.

## Usage

First, require the module

```js
const titleize = require('titleizejs');
```

Basic syntax of Titleize JS

```js
titleize(string, options);
```

Example:

```js
titleize('hello world'); // result: Hello World
```

## Options

So far, the options parameter is an object with three possible properties. These are:

- keepUpperCaseWords (`Boolean`, default: `false`, optional)
- keepUpperCaseLetters (`Boolean`, default: `false`, optional)
- ignoreSymbols (`String`, optional)
- isSlug (`Boolean`, optional)

#### keepUpperCaseWords

Setting this to true will preserve all present words that are fully capitalised. This can be useful when dealing with abbreviations or acronyms.

```js
titleize('hello WORLD', { keepUpperCaseWords: true }); // result: Hello WORLD
```

#### keepUpperCaseLetters

Setting this to true will preserve all present capital letters.

```js
titleize('hello camelCase', { keepUpperCaseLetters: true }); // result: Hello CamelCase
```

#### ignoreSymbols

Providing a string to this setting will make sure that the provided symbols are not removed by Titleize JS. This string can contain many different symbols.

```js
titleize('hello world! do you like javascript?', { ignoreSymbols: '!' });
// result: Hello World! Do You Like Javascript

titleize('hello world! do you like javascript?', { ignoreSymbols: '?' });
// result: Hello World Do You Like Javascript?

titleize('hello world! do you like javascript?', { ignoreSymbols: '!?' });
// result: Hello World! Do You Like Javascript?
```

#### isSlug

If the string passed to `titleize` is a slug, the default behaviour of Titleize JS is to capitalise all words and preserve the hyphens, as if it were a hyphenated word. To make sure that the slug gets converted properly, pass the isSlug setting in the options object. E.g.

```js
// Default behaviour
titleize('i-am-a-slug'); // result: I-Am-a-Slug

// Passing { isSlug: true }
titleize('i-am-a-slug', { isSlug: true }); // result: I Am a Slug
```

If you happen to have slugs that are use different separators, you can pass the separator for your string to `isSlug` and it will replace those. E.g.:

```js
titleize('i_am_a_slug', { isSlug: '_' }) // result: I Am a Slug
```

#### Support, bug-reports, feature suggestions

If you want to contribute, report a bug, or have a suggestion for a feature, contact me at robin@goudeketting.nl or contact me via Github or Twitter.
