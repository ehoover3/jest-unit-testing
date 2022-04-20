// 1. import cloneArray function
const cloneArray = require("./cloneArray");

// 2. test if function correctly clones array
test("properly clones array", () => {
  const array = [1, 2, 3];
  //   expect(cloneArray(array)).toBe(array);
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});

// 3. edit package.json file ---> "test": "jest --coverage"
// 4. type in terminal --------->  npm test

// 5a. NOTE: with "toBe"
// terminal says:     Received: serializes to the same string
// this says these objects look to be the same, but they're actually different places in memory
// cloneArray creates a new array, and references 2 different places in memory

// 5b. NOTE: with "toEqual"
// arrays have the same values & structure, but not necessarily the same memory address

// 5c. NOTE: with "not.toBe"
// we are making sure we are making a copy and not just referencing the same array in memory
