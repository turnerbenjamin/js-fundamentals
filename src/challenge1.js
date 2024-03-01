// Using the function keyword declare a function called `greet`
// that returns a String "Hi, Ed!"
function greet() {
  return "Hi, Ed!";
}

const tests = [
  {
    args: [],
    expected: "Hi, Ed!",
  },
];

function runTests(fn, tests) {
  const didPass = tests.every((test) => fn(...test.args) === test.expected);
  console.log(didPass ? "All tests passed" : "Fail");
}
runTests(greet, tests);
