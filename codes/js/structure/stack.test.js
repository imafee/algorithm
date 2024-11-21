import { Stack } from "../common/Stack.js";

test("push&pop&clear", () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.size()).toBe(1);
  stack.push(2, 3);
  expect(stack.size()).toBe(3);
  stack.pop();
  expect(stack.size()).toBe(2);
  stack.pop();
  expect(stack.size()).toBe(1);
  stack.clear();
  expect(stack.isEmpty()).toBeTruthy();
});
test("constructor", () => {
  const stack = new Stack(1, 2, 3);
  expect(stack.size()).toBe(3);
  expect(stack.toString(",")).toBe("1,2,3");
});
test("peek", () => {
  const stack = new Stack(1, 2, 3);
  expect(stack.peek()).toBe(3);
  expect(stack.peek(-1)).toBe(3);
  expect(stack.peek(-2)).toBe(2);
  expect(stack.peek(-3)).toBe(1);
  expect(stack.peek(1)).toBe(1);
  expect(stack.peek(2)).toBe(2);
  expect(stack.peek(3)).toBe(3);
});
