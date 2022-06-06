const { returnTwo, greeting, add } = require("./functions");

test("returnTwo should return 2", () => {
  expect(returnTwo()).toBe(2);
});

test("greeting should expect a nice greeting for the name", () => {
  expect(greeting("Jill")).toBe("Hello, Jill.");
  expect(greeting("James")).toBe("Hello, James.");
});

test("the function add should add the numbers together", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(5, 9)).toBe(14);
});
