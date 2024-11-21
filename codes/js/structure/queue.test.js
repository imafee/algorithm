import { Queue } from "../common/Queue.js";

test("add&remove&clear", () => {
  const queue = new Queue();
  queue.add(1);
  expect(queue.size()).toBe(1);
  queue.add(2, 3, 4);
  expect(queue.size()).toBe(4);
  queue.remove();
  expect(queue.size()).toBe(3);
  queue.remove();
  queue.remove();
  expect(queue.size()).toBe(1);
  queue.clear();
  expect(queue.isEmpty()).toBeTruthy();
});

test("peek", () => {
  const queue = new Queue(1, 2, 3);
  expect(queue.peek()).toBe(1);
});
