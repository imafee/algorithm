import { typeName } from "./tools.js";

// 双端队列
export class Deque {
  #items = {}; // 注意：object的 key 是无序的
  #minKey = 0; // 左序号（待移除元素的序号）
  #count = 0; // 元素数量
  constructor(...values) {
    if (values.length === 0) return;
    this.addBack(...values);
  }
  get items() {
    return this.#items;
  }
  get count() {
    return this.#count;
  }
  get minKey() {
    return this.#minKey;
  }
  get maxKey() {
    return this.#minKey + this.#count - 1;
  }
  increaseMinKey(count = 1) {
    this.#minKey += count;
  }
  decreaseMinKey(count = 1) {
    this.#minKey -= count;
  }
  increaseCount(count = 1) {
    this.#count += count;
  }
  decreaseCount(count = 1) {
    this.#count -= count;
  }
  *[Symbol.iterator]() {
    // 按key值排序，弥补key 无序
    const entries = Object.entries(this.items);
    entries.sort((a, b) => a[0] - b[0]);
    // 迭代
    for (const entry of entries) {
      const [key, value] = entry;
      yield [+key, value];
    }
  }
  addBack(...values) {
    if (values.length === 0) return void 0;
    let result = [];
    for (const value of values) {
      this.increaseCount();
      this.items[this.maxKey] = value;
      result.push([this.maxKey, value]);
    }
    return result;
  }
  addFront(...values) {
    if (values.length === 0) return void 0;
    let result = [];
    for (const value of values) {
      this.increaseCount();
      this.decreaseMinKey();
      this.items[this.minKey] = value;
      result.push([this.minKey, value]);
    }
    return result;
  }
  removeBack(count = 1) {
    if (this.isEmpty()) return void 0;
    let result = [];
    while (count-- > 0) {
      result.push(this.items[this.maxKey]);
      delete this.items[this.maxKey];
      this.decreaseCount();
    }
    return result;
  }
  removeFront(count = 1) {
    if (this.isEmpty()) return void 0;
    let result = [];
    while (count-- > 0) {
      result.push(this.items[this.minKey]);
      delete this.items[this.maxKey];
      this.increaseMinKey();
      this.decreaseCount();
    }
    return result;
  }
  clear() {
    const result = this.items;
    this.#items = {};
    this.#minKey = 0;
    this.#count = 0;
    return result;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  peek() {
    return [this.items[this.minKey], this.items[this.maxKey]];
  }
  toString(separator = "") {
    let elements = [];
    for (const element of this) {
      const [key, value] = element;
      elements.push(value);
    }
    return elements.join(separator);
  }
}

// 队列
export class Queue extends Deque {
  constructor(...elements) {
    super(...elements);
  }
  add(...values) {
    return this.addBack(...values);
  }
  remove(count) {
    return this.removeFront(count);
  }
  peek() {
    return this.items[this.minKey];
  }
}
