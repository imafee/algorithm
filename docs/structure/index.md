# 数据结构

描述了数据在物理存储和逻辑关系中的结构表现。

## Data 数据

| 名称     | 含义                               |
| -------- | ---------------------------------- |
| 数据对象 | 性质相同的数据元素的集合           |
| 数据元素 | 有一定意义的数据基本单元           |
| 数据项   | 数据的逻辑存储的最小单位           |
| 数据     | 描述客观事物的符号，可被计算机操作 |

## Structure 结构

- 物理结构: 数据的分布位置，面向对计算存储
- 逻辑结构：数据元素之间的关系，面向解决问题。

| 名称                     | 分类     | 含义                                                                                                                                     |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 顺序存储结构（Sequence） | 物理结构 | 数据元素存放在连续的存储单元中。优点是可以实现随机访问，缺点是空间利用率不高，且插入和删除等逻辑操作消耗性能                             |
| 链式存储结构（linked）   | 物理结构 | 数据元素存放在任意的存储单元中，每个元素包含数据和指向下一个元素的指针。优点是空间利用率高、插入和删除等逻辑操作效率高，但访问速度较慢。 |
| 集合结构（Set）          | 逻辑结构 | 数据元素之间没有关系，每个元素都是独立的                                                                                                 |
| 线性结构（Linear）       | 逻辑结构 | 数据元素之间是一对一的关系，如数组、链表、栈和队列                                                                                       |
| 树形结构（Tree）         | 逻辑结构 | 数据元素之间是一对多的关系，如二叉树、平衡树等                                                                                           |
| 图形结构（Graph）        | 逻辑结构 | 数据元素之间是多对多的关系，如无向图和有向图                                                                                             |

## 通用的数据类型

在具体的实现中，可以根据需求选择[顺序存储,链式存储]的物理结构。而在 ADT 的设计中不必体现出来。

<!-- prettier-ignore -->
| 名称 | 核心存储 | 核心操作 | 逻辑结构 | 描述 | 应用场景 |相关数据结构|
| --- | --- | --- | ---- | ---- | ----|----|
Stack 栈|elements|push,pop,clear,peek|线性结构|只能从一端进出元素，先进后出|函数调用栈、表达式求值|-
Queue 队列|elements |add,remove,clear,peek|线性结构|一端进另一端出，先进先出|任务调度、消息队列|Deque
LinkedList 链表|elements,head|insert,remove,clear,peek,find|线性结构|节点间像链条一样连接|实现动态数据存储，构建多项式表达|DoubleLinkedList
Set 集合|elements|insert,remove,clear,peek,find|线性结构|元素不重复|数组去重
Dictionary/Map<br>字典/映射/关联数组|table|add,remove,clear,find|非线性结构|键值对元素表|在面向对象编程中，Dictionary可以用来存储对象的动态属性
HashTable/HashMap<br>散列表/散列映射|table|add,remove,clear,find|非线性结构、hashing|使用散列函数将数据转换为固定长度的哈希值，以用于快速查找|密码存储（存储密码的哈希值），数据缓存|
BinarySearchTree<br>二叉搜索树|root|insert,remove,clear,inOrderTraverse,preOrderTraverse,postOrderTraverse|非线性结构|父节点最多 2 个子节点，而子节点只有 1 个父节点。树的深度可测量|族谱，DOM 结构，实例的属性|MultiWayTree、Trie、Segment Tree、Binary Indexed Tree、Binary Heap
Undirected Graph 无向图|？|？|非线性结构||地图的景点距离，人脉关系|Directed Graph、Complete Graph、Bipartite Graph、Tree like Graph、Union-Find、Fibonacci Heap

## 如何设计 ADT

如何定义一个抽象数据类型(abstract data type,ADT)：

- 定义一个数学模型
- 设计一组操作模型的接口

```ADT
Name 抽象数据类型的名字
Data
   数据元素之间逻辑关系的定义
Operation
   操作名
      初始条件
      操作结果描述
```

## 实现数据结构中的相关问题

- 连续存储的数据，使用哪种数据类型最合适？

从性能上考虑，应该选择'对象数据类型'而不是'数组数据类型'，虽然后者已经实现接口了。分析：

- 添删操作：复杂度：对象 O(1)，数组在头部为 O(n) ，因为数组元素的整体向后移动会耗费性能
- 查询操作：当传入位置参数时，都是 O(1);

综上选择对象类型，算法复杂度低，内存的写操作更少。
