const titleize = require('./titleize');

const str = "I'm a string! yes, Or am I? !@#$%^&*()-_=+[]{};:'\"\\|/.>,<";
const title = titleize(str, { ignoreSymbols: "'!." });
console.log('test', title);
const string1 = "I'm a slug-slug";
const string2 = "I'm not a slug slug";

console.log(string1.match(/(?<=[\W+])-(?=[\W+])/g));
