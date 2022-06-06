const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
} = require("./functions");

test("returnTwo should return 2", () => {
  expect(returnTwo()).toBe(2);
});

test("greeting should expect a nice greeting for the name", () => {
  expect(greeting("Jill")).toBe("Hello, Jill.");
  expect(greeting("James")).toBe("Hello, James.");
});

describe("do the math functions work", () => {
  test("the add function works", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
  });
  test("the subtract function works", () => {
    expect(subtract(19, 9)).toBe(10);
    expect(subtract(2, 1)).toBe(1);
  });
  test("the multiply function works", () => {
    expect(multiply(5, 9)).toBe(45);
    expect(multiply(4, 2)).toBe(8);
  });
  test("the divide function works", () => {
    expect(divide(100, 5)).toBe(20);
    expect(divide(5, 5)).toBe(1);
  });
});
