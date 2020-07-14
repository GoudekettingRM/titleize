const expect = require('chai').expect;
const titleize = require('../titleize.js');
const minifiedTitleize = require('../titleize.min.js');
const tests = require('./tests');

describe('Titleize tests, not minified', () => {
  tests.forEach((testSet) => {
    describe(testSet.describe, () => {
      testSet.tests.forEach((test) => {
        it(test.it, () => {
          if (test.setting) {
            const title = titleize(test.input, test.setting);
            expect(title).to.equal(test.expectedOutput);
          } else {
            const title = titleize(test.input);
            expect(title).to.equal(test.expectedOutput);
          }
        });
      });
    });
  });
});

describe('Titleize tests, minified', () => {
  tests.forEach((testSet) => {
    describe(testSet.describe, () => {
      testSet.tests.forEach((test) => {
        it(test.it, () => {
          if (test.setting) {
            const title = minifiedTitleize(test.input, test.setting);
            expect(title).to.equal(test.expectedOutput);
          } else {
            const title = minifiedTitleize(test.input);
            expect(title).to.equal(test.expectedOutput);
          }
        });
      });
    });
  });
});
