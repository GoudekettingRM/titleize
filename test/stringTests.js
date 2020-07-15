module.exports = [
  {
    describe: 'Plain tests, without exceptions',
    tests: [
      {
        it: 'should return a string without special characters',
        input: 'I\'m a string! Or am I? !@#$%^&*()-_=+[]{};:"\\|/.>,<',
        expectedOutput: "I'm a String or Am I",
      },
      {
        it: 'should not capitalise any conjunctions',
        input: 'we are conjunctions AND BUT OR NOR you see',
        expectedOutput: 'We Are Conjunctions and but or nor You See',
      },
      {
        it: 'should not capitalise any articles',
        input: 'we are conjunctions A AN THE you see',
        expectedOutput: 'We Are Conjunctions a an the You See',
      },
      {
        it: 'should not capitalise any prepositions',
        input:
          'we are conjunctions via to on per for in of by at as yet so you see',
        expectedOutput:
          'We Are Conjunctions via to on per for in of by at as yet so You See',
      },
      {
        it:
          'should always capitalise the first and last word of a sentence 1/2',
        input:
          'we are conjunctions via to on per for in of by at as yet so you see',
        expectedOutput:
          'We Are Conjunctions via to on per for in of by at as yet so You See',
      },
      {
        it:
          'should always capitalise the first and last word of a sentence 2/2',
        input:
          'or we are conjunctions via to on per for in of by at as yet so you see and',
        expectedOutput:
          'Or We Are Conjunctions via to on per for in of by at as yet so You See And',
      },
      {
        it:
          'should capitalise the first letter of both words of a hyphenated word 1/3',
        input: 'this sentence is self-explanatory',
        expectedOutput: 'This Sentence Is Self-Explanatory',
      },
      {
        it:
          'should capitalise the first letter of both words of a hyphenated word 2/3',
        input: 'self-explanatory is this sentence',
        expectedOutput: 'Self-Explanatory Is This Sentence',
      },
      {
        it:
          'should capitalise the first letter of both words of a hyphenated word 3/3',
        input: 'this sentence self-explanatory is',
        expectedOutput: 'This Sentence Self-Explanatory Is',
      },
    ],
  },
  {
    describe: 'ignoreSymbols exceptions',
    tests: [
      {
        it: 'should keep the special characters that are provided 1/3',
        input: "I'm a String! Yes or Am I !-<.<>$%",
        setting: { ignoreSymbols: '!.' },
        expectedOutput: "I'm a String! Yes or Am I !.",
      },
      {
        it: 'should keep the special characters that are provided 2/3',
        input: "I'm a string! right? wrong....",
        setting: { ignoreSymbols: '!?' },
        expectedOutput: "I'm a String! Right? Wrong",
      },
      {
        it: 'should keep the special characters that are provided 3/3',
        input: 'here starts the title: this is the subtitle',
        setting: { ignoreSymbols: ':' },
        expectedOutput: 'Here Starts the Title: This Is the Subtitle',
      },
    ],
  },
  {
    describe: 'keepUpperCaseLetters exceptions',
    tests: [
      {
        it:
          'should keep the upper case letters that are present in the provided string 1/2',
        input: 'This string will contain soME uPPerCase letters!',
        setting: { keepUpperCaseLetters: true },
        expectedOutput: 'This String Will Contain SoME UPPerCase Letters',
      },
      {
        it:
          'should keep the upper case letters that are present in the provided string 2/2',
        input: 'This string WILL Contain soME uPPerCase letters!',
        setting: { keepUpperCaseLetters: true },
        expectedOutput: 'This String WILL Contain SoME UPPerCase Letters',
      },
    ],
  },
  {
    describe: 'keepUpperCaseWords exceptions',
    tests: [
      {
        it: 'should not change words that are fully upper case',
        input: 'This string WILL Contain soME uPPerCase letters!',
        setting: { keepUpperCaseWords: true },
        expectedOutput: 'This String WILL Contain Some Uppercase Letters',
      },
      {
        it:
          'should make the words lower case if there is one or more letters lower case in it',
        input: 'THIs STRIng WILL CONTain some UPPERCASE LETters!',
        setting: { keepUpperCaseWords: true },
        expectedOutput: 'This String WILL Contain Some UPPERCASE Letters',
      },
    ],
  },
  {
    describe: 'isSlug exceptions',
    tests: [
      {
        it: 'should de-slugify a slug',
        input: 'i-am-a-slug-for-your-url',
        setting: { isSlug: true },
        expectedOutput: 'I Am a Slug for Your Url',
      },
      {
        it: 'should de-slugify anything if isSlug is passed',
        input: 'i am not a slug-for-your-url',
        setting: { isSlug: true },
        expectedOutput: 'I Am Not a Slug for Your Url',
      },
    ],
  },
];
