require("colors");
const Diff = require("diff");

//Checking strings:
const one = "beep boop";
const other = "beep boob blah";

const diff = Diff.diffChars(one, other);

diff.forEach((part) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added ? "green" : part.removed ? "red" : "grey";
  process.stderr.write(part.value[color]);
});

console.log();


//Checking objects:
const oldObj = {
    words: "Hello",
    numbers: 1234,
    nestedObject: {
        more_words: "me again"
    }
}

const newObj = {
    words: "new",
    numbers: 4321,
    nestedObject: {
        more_words: "me again"
    }
}

const diff2 = Diff.diffJson(oldObj, newObj)

diff2.forEach((part) => {
    // green for additions, red for deletions
    // grey for common parts
    const color = part.added ? "green" : part.removed ? "red" : "grey";
    process.stderr.write(part.value[color]);
  });

console.log()