// 1.理解形参和实例参数化，但是参数的类型是固定的
// function foo(name: string, age: number) {

// }

// foo('why', 19)
// foo('kobe', 30)

// 2.定义一个函数：将内容返回
function bar<Type>(arg: Type): Type {
  return arg
}

// 2.1.完整的写法
const res1 = bar<number>(123)
const res2 = bar<string>('asd')
const res3 = bar<{ name: string }>({ name: 'why' })

// 2.2.省略的类型
const res4 = bar('aaaaaa')
const res5 = bar(1111)

// const message = 'hello world'

export { }

