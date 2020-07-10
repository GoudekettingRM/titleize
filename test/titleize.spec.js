const expect = require('chai').expect;
const titleize = require('../titleize.min.js');

describe('Titleize tests', () => {
  describe('Plain tests, without exceptions', () => {
    it('should return a string without special characters', () => {
      const str = "I'm a string! Or am I? !@#$%^&*()-_=+[]{};:'\"\\|/.>,<";
      const title = titleize(str);
      expect(title).to.equal('Im A String Or Am I');
    });
    it('should de-slugify a slug', () => {
      const str = 'i-am-a-slug-for-your-url';
      const title = titleize(str);
      expect(title).to.equal('I Am A Slug For Your Url');
    });
  });
});
