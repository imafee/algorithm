import { typeName } from "./tools.js";

export class Stack {
  #items = {};
  #count = 0;
  constructor(...elements) {
    this.push(...elements);
  }
  get items() {
    return this.#items;
  }
  get count() {
    return this.#count;
  }
  *[Symbol.iterator]() {
    // 按key值排序，弥补key的无序
    const entries = Object.entries(this.items);
    entries.sort((a, b) => a[0] - b[0]);
    // 迭代
    for (const entry of entries) {
      const [key, value] = entry;
      yield [+key, value];
    }
  }
  push(...elements) {
    for (const element of elements) {
      this.#items[this.#count] = element;
      this.#count++;
    }
    return elements;
  }
  pop() {
    if (this.#count === 0) return void 0;
    const lastElement = this.#items[this.#count - 1];
    delete this.#items[this.#count - 1];
    this.#count--;
    return lastElement;
  }
  clear() {
    const result = this.#items;
    this.#items = {};
    this.#count = 0;
    return result;
  }
  size() {
    return this.#count;
  }
  peek(pos = this.#count) {
    if (typeName(pos) !== "number" || pos !== parseInt(pos) || pos === 0)
      return void 0;
    if (this.isEmpty()) return void 0;
    let index = pos - 1;
    if (pos < 0) index = this.#count + pos;
    return this.#items[index];
  }
  isEmpty() {
    return this.size() === 0;
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
