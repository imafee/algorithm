# Stack 栈

ADT

```yml
Name Stack
Data
   - #items:Object 键值对元素的集合
   - #count:Number 元素数量
- Instance
   - constructor()
   - *[Symbol.iterator]() 实例的迭代接口
- Operation
   - get items()
   - get count()
   - push(...elements):Array 元素入栈
   - pop():Any 元素出栈
   - clear()
   - peek(position=this.count):Any 按位置查找元素
   - ---扩展---
   - size() -> this.count 元素数量
   - isEmpty() 元素数量是否为空
   - toString(separator = ""):String 打印所有元素
```
