const gitDiff = require("git-diff");
const assert = require("assert");

const options = {
  color: false, // Add color to the git diff returned?
  flags: null, // A space separated string of git diff flags from https://git-scm.com/docs/git-diff#_options
  forceFake: false, // Do not try and get a real git diff, just get me a fake? Faster but may not be 100% accurate
  noHeaders: false, // Remove the ugly @@ -1,3 +1,3 @@ header?
  save: false, // Remember the options for next time?
  wordDiff: false, // Get a word diff instead of a line diff?
};

//Basic git diff
const oldStr1 = "fred\nis\nfunny\n";
const newStr1 = "paul\nis\nfunny\n";
const diff1 = gitDiff(oldStr1, newStr1);

assert.equal(diff1, "@@ -1,3 +1,3 @@\n-fred\n+paul\n is\n funny\n");
console.log(diff1);

//Using flags - Ignoring all whitespace
const oldStr2 = "fred\n   is   \nfunny\n";
const newStr2 = "paul\nis\n   funny   \n";
const diff2 = gitDiff(oldStr2, newStr2, {
  flags: "--diff-algorithm=minimal --ignore-all-space",
});

assert.equal(diff2, "@@ -1,3 +1,3 @@\n-fred\n+paul\n is\n    funny   \n");
console.log(diff2);

//Using noHeaders
const diff3 = gitDiff(oldStr1, newStr1, {
  noHeaders: true,
});
console.log(diff3);

//More extensive test
const oldStr4 = `const oldStr1 = "fred is funny"; const newStr1 = "paul is funny "; const diff1 = gitDiff(oldStr1, newStr1);`;
const newStr4 = `const oldStr1 = "fred is terrible"; const newStr1 = "paul is terrible "; const diff1 = gitDiff(oldStr1, newStr1);`;
const diff4 = gitDiff(oldStr4, newStr4, {
  noHeaders: true,
});

console.log(diff4);
