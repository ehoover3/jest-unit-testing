// 1. import subtract function
const subtract = require("./subtract");

// 2. test if (1) + (-2) == (-1)
test("correctly adds two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});

// 3. edit package.json file ---> "test": "jest --coverage"
// 4. type in terminal --------->  npm test
