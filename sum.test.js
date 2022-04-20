// 1. import sum function
const sum = require("./sum");

// 2. test if 1 + 2 == 3
test("correctly adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

// 3. edit package.json file ---> "test": "jest --coverage"
// 4. type in terminal --------->  npm test

// unit testing is where you test the smallest thing about your code, i.e. a specific function, component, or unit
