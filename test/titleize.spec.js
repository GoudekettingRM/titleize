const expect = require('chai').expect;
const titleize = require('../titleize.js');
const minifiedTitleize = require('../titleize.min.js');
const stringTests = require('./stringTests');
const throwTests = require('./throwTests');

describe('String tests for Titleize, not minified', () => {
  stringTests.forEach((testSet) => {
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

describe(`Throw tests from Titleize, not minified. ${throwTests.describe}`, () => {
  throwTests.tests.forEach((test) => {
    it(test.it, () => {
      expect(function () {
        titleize(test.input);
      }).to.throw(test.expectedOutput.err, test.expectedOutput.msg);
    });
  });
});

describe('String tests for Titleize, minified', () => {
  stringTests.forEach((testSet) => {
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

describe(`Throw tests from Titleize, minified. ${throwTests.describe}`, () => {
  throwTests.tests.forEach((test) => {
    it(test.it, () => {
      expect(function () {
        minifiedTitleize(test.input);
      }).to.throw(test.expectedOutput.err, test.expectedOutput.msg);
    });
  });
});
