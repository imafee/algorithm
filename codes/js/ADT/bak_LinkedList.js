import { Error } from "./Error.js";

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class LinkedList {
  constructor(...values) {
    this.head = null;
    this.count = 0;
    this.addsBack(...values);
  }
  *[Symbol.iterator]() {
    let current = this.head;
    // 迭代
    while (current.next) {
      yield (current = current.next);
    }
    yield current;
  }
  get size() {
    return this.count;
  }
  getElement(position) {
    if (typeof position !== "number" && position === "NaN") return void 0;
    if (0 > position && position > this.size) return void 0;
    if (position === 0) return this;

    for (const element of this) {
      position--;
      if (position === 0) return element;
    }
  }
  getPosition(value) {
    if (value === void 0) return void 0;
    let position = 0;
    for (const element of this) {
      position++;
      if (value === element.value) return position;
      else continue;
    }
  }
  // 或者叫splice
  insert(position, value) {
    this.inserts(position, ...value);
  }
  remove(position) {
    const prev = this.getElement(position - 1);
    if (prev === void 0) return void 0;
    const current = prev.next;
    const next = current.next;
    prev.next = next;
    return current;
  }
  clear() {
    this.head = null;
    this.count = 0;
  }
  toString(separator = "") {
    let values = [];
    for (const element of this) {
      const [key, value] = element;
      values.push(value);
    }
    return values.join(separator);
  }
  // ===其他非必需接口===
  isEmpty() {
    return this.count === 0;
  }
  inserts(position, ...values) {
    const prev = this.getElement(position - 1);
    if (prev === this) return void 0;

    const next = prev.next;
    let current = prev;
    for (const value of values) {
      const element = new Node(value);
      current.next = element;
      current = element;
      this.count++;
    }
    current.next = next;
    return element;
  }
  addBack(value) {
    this.insert(this.count + 1, value);
  }
  addsBack(...values) {
    this.inserts(this.count + 1, ...values);
  }
  addFront(value) {
    this.insert(1, value);
  }
  addsFront(...values) {
    this.inserts(1, ...values);
  }
}

// 双向链表

// 循环链表

// 排序链表
