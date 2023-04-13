interface IIndexType {
  // 返回值类型的目的是告知通过索引去获取到的值是什么类型
  // [index: string]: string
  // [index: number]: string
}

// 索引签名：[index:number]:string
// const names: IIndexType = ['acv', 'asd', 'asd']

// 索引签名：[index:number]:any:没有报错
// 1.索引要求必须是字符串类型names[0]=>names['0']
// const names: IIndexType[] = ['abc', 'asd', 'asda']

// 索引签名  [index: string]: string
// 严格字面量复制检测：['abc','asd','awq']=>Array实例=>names[0] names.forEach
// const names: IIndexType = ['abc', 'asd', 'asdas']


export { }
