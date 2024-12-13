# Array 数组

ADT

```yml
- Name ArrayLite
- Data
   - #size=0
   - #elements={key:Element}
- Operation
   - get size() 取长度
   - set size() 设置长度，只接受0 和正整数
   - push(...elements):length 插入尾部
   - pop():element 删除尾部元素
   - unshift(...elements):length 插入头部
   - shift():element 删除头部元素
   - splice(start=0, deleteCount=0, ...elements):[...elements] 移除且插入参数,返回删除的元素
   - peek(index):Element|undefined 按索引取值
   - find(cb,thisArg):[matchedElement,index] 找到第一个匹配项，返回Entry
      - cb = (element,index,array)=>{}
   - findLast(cb,thisArg):[matchedElement,index] 找到最后一个匹配项，返回Entry
   - findAll(cb, thisArg):Entries 找到所有的匹配项，返回Entries
```

注意点：

- Element 类型一致，且不为 undefined
- 接口的通用定义。就按 operation 来写，语言细节不展开细化。例如以 js 语言为例，方法应该分布在：
  - instance：constructor()， \*[Symbol.iterator]()
  - prototype
  - static
- 接口的开放性定义。存储属性必需隐藏，防止使用方误操作。
- 存储属性的数据类型。选择最优解
