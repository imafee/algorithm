import { Deque } from "../common/Queue.js";

test("constructor", () => {
  const deque = new Deque(1, 2, 3);
  expect(deque.items).toEqual({ 0: 1, 1: 2, 2: 3 });
});

test("getter", () => {
  const deque = new Deque(1, 2, 3, 4);
  expect(deque.count).toBe(4);
  expect(deque.minKey).toBe(0);
  expect(deque.maxKey).toBe(3);
});

test("increase & decrease", () => {
  const deque = new Deque();
  deque.increaseMinKey();
  deque.increaseMinKey();
  expect(deque.minKey).toBe(2);
  deque.decreaseMinKey();
  deque.decreaseMinKey();
  expect(deque.minKey).toBe(0);
  deque.increaseCount();
  deque.increaseCount();
  expect(deque.count).toBe(2);
  deque.decreaseCount();
  deque.decreaseCount();
  expect(deque.count).toBe(0);
});

test("add & remove & clear", () => {
  const deque = new Deque();
  deque.addFront(1, 2);
  expect(deque.items).toEqual({ "-2": 2, "-1": 1 });
  deque.addFront(3, 4);
  expect(deque.items).toEqual({ "-4": 4, "-3": 3, "-2": 2, "-1": 1 });
  deque.addBack(5, 6);
  expect(deque.items).toEqual({
    "-4": 4,
    "-3": 3,
    "-2": 2,
    "-1": 1,
    0: 5,
    1: 6,
  });
  deque.addBack(7, 8);
  expect(deque.items).toEqual({
    "-4": 4,
    "-3": 3,
    "-2": 2,
    "-1": 1,
    0: 5,
    1: 6,
    2: 7,
    3: 8,
  });
  deque.clear();
  expect(deque.isEmpty()).toBeTruthy();
});
test("other methods", () => {
  const deque = new Deque(1, 2, 3);
  expect(deque.peek()).toEqual([1, 3]);
  deque.addFront(0);
  deque.addBack(4);
  expect(deque.peek()).toEqual([0, 4]);
  expect(deque.toString(",")).toBe("0,1,2,3,4");
});

test("iterator", () => {
  const deque = new Deque(1, 2, 3, 4);
  let key = 0;
  let value = 1;
  for (const item of deque) {
    expect(item).toEqual([key, value]);
    key++;
    value++;
  }
});
