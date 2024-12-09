# Queue 队列

分类

- 普通队列 Queue
- 双端队列 Deque

ADT

```yml
Name Queue
Data
  - #items = {}; // 元素。注意：object的 key 是无序的
  - #minKey = 0; // 左序号（待移除元素的序号）
  - #count = 0; // 元素数量
- Instance
   - constructor()
   - *[Symbol.iterator]() 实例的迭代接口
- Operation
   - get items()
   - get count()
   - get minKey()
   - get maxKey()
   - add(...values)
   - remove()
   - clear()
   - peek(position = this.minKey):Any 按位置查找元素
   - ---扩展---
   - size() 元素数量
   - isEmpty() 元素数量是否为空
   - toString(separator = ""):String 打印this.items
```
