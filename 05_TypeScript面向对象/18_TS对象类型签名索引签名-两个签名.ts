interface IIndexType {
  // 两个索引类型的写法
  // [index: number]: string
  // [key: string]: any

  // 下面的写法不允许:数字类型索引的类型，必须是字符串类型索引的类型的子类型
  // 原因：所有的数字类型都会是会转成字符串类型去对象中获取内容
  // 数字0：number|string，当我们是一个数字的时候，既要满足通过number去拿到的内容，不会和string拿到的结果矛盾
  // 数字‘0’：string

  // 数字0：string
  // 数字‘0’：number|string
  [index: number]: string
  [key: string]: number | string
}

const names: IIndexType = ['abc', 'asd', 'asdas']
const item1 = names[0]
const forEachFn = names['forEach']


export { }