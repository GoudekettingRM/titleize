const expect = require('chai').expect;
const titleize = require('../titleize.js');

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
  describe('ignoreSymbols exceptions', () => {
    it('should return keep the special characters that are provided', () => {
      const str = "I'm a string! Or am I? !@#$%^&*()-_=+[]{};:'\"\\|/.>,<";
      const title = titleize(str, { ignoreSymbols: '\'!.'});
      expect(title).to.equal("I'm A String! Or Am I ! '.");
    });
    it('should keep the dashes if provided as ignoreSymbol', () => {
      const str = 'i am a string with-a dash';
      const title = titleize(str, { ignoreSymbols: '-' });
      expect(title).to.equal('I Am A String With-a Dash');
    })
  })
  describe('keepUpperCaseLetters exceptions', () => {
    it('should keep the upper case letters that are present in the provided string 1/2', () => {
      const str = "This string will contain soME uPPerCase letters!"
      const title = titleize(str, { keepUpperCaseLetters: true })
      expect(title).to.equal('This String Will Contain SoME UPPerCase Letters');
    })
    it('should keep the upper case letters that are present in the provided string 2/2', () => {
      const str = "This string WILL Contain soME uPPerCase letters!"
      const title = titleize(str, { keepUpperCaseLetters: true })
      expect(title).to.equal('This String WILL Contain SoME UPPerCase Letters');
    })
  })
  describe('keepUpperCaseWords exceptions', () => {
    it('should not change words that are fully upper case', () => {
      const str = "This string WILL Contain soME uPPerCase letters!"
      const title = titleize(str, { keepUpperCaseWords: true })
      expect(title).to.equal('This String WILL Contain Some Uppercase Letters');
    })
    it('should make the words lower case if there is one or more letters lower case in it', () => {
      const str = "THIs STRIng WILL CONTain some UPPERCASE LETters!"
      const title = titleize(str, { keepUpperCaseWords: true })
      expect(title).to.equal('This String WILL Contain Some UPPERCASE Letters');
    })
  })

});
