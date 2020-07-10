# Titleize JS

## Installation

Run

```
npm i titleizejs
```

to install the module in your project.

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
Setting this to true will preserve all present words that are fully capitalised.
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
titleize('hello world! do you like javascript?', { ignoreSymbols: '!' }) // result: Hello World! Do You Like Javascript

titleize('hello world! do you like javascript?', { ignoreSymbols: '?' }) // result: Hello World Do You Like Javascript?

titleize('hello world! do you like javascript?', { ignoreSymbols: '!?' }) // result: Hello World! Do You Like Javascript?
```
