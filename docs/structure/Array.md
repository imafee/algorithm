# Array 数组

ADT

```yml
- Name ArrayLite
- Data
   - #elements={key:value}
   - #length=0
- Instance
   - constructor()
   - *[Symbol.iterator]() 实例的迭代接口
- Operation
   - get length()
   - set length()
   - push(...args):length 插入尾部
   - pop():element 删除尾部元素
   - unshift(...args):length 插入头部
   - shift():element 删除头部元素
   - splice(start=0, deleteCount=0, ...args):[...deletedElements] 移除且插入参数
   - peek(index) 按位置取值
   - find(callbackFn,thisArg):[matchedElement,index] 找到第一个匹配的值和索引
      - callbackFn = (element,index,array)=>{}
   - findLast(callbackFn,thisArg):[matchedElement,index] 找到最后一个匹配的值和索引
   - findAll(callbackFn, thisArg):Entries 找到所有匹配的值和索引
```
