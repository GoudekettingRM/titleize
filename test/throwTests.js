module.exports = {
  describe: 'All subsequent inputs should throw an error',
  tests: [
    {
      it: 'should not accept a number as input',
      input: 10,
      expectedOutput: {
        err: TypeError,
        msg: 'No string was provided',
      },
    },
    {
      it: 'should not accept an array as input',
      input: [],
      expectedOutput: {
        err: TypeError,
        msg: 'No string was provided',
      },
    },
    {
      it: 'should not accept an array of strings as input',
      input: ['hello', 'world'],
      expectedOutput: {
        err: TypeError,
        msg: 'No string was provided',
      },
    },
    {
      it: 'should not accept an abject as input',
      input: {},
      expectedOutput: {
        err: TypeError,
        msg: 'No string was provided',
      },
    },
    {
      it: 'should not accept an abject with a string as input',
      input: { hello: 'world' },
      expectedOutput: {
        err: TypeError,
        msg: 'No string was provided',
      },
    },
    {
      it: 'should not accept an empty string',
      input: '',
      expectedOutput: {
        err: Error,
        msg: 'Empty string provided',
      },
    },
  ],
};
