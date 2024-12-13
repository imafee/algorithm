import { LinkedList } from "../common/bak_LinkedList";

test("constructor", () => {
  const linkedList = new LinkedList(1, 2, 3);
  expect(linkedList.size).toBe(3);
});
