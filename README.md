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
titleize('this is a normal string'); //result: This Is A Normal String
```

## Options

So far, the options parameter is an object with three possible properties. These are:

- keepUpperCaseWords (`Boolean`, default: `false`, optional)
- keepUpperCaseLetters (`Boolean`, default: `false`, optional)
- ignoreSymbols (`String`, optional)
