// 1.区别一：type类别使用范围更广,接口类型只能用来声明对象
type MyNumber = number;
type IDType = number | string

// 2.区别二：在声明对象时，interface可以声明
// 2.1.type不允许两个相同名称的别名同时存在
// type PointTtype1 = {
//   x: number,
//   y: number
// }

// type PointTtype1 = {
//   Z?: number
// }

// 2.2.interface可以多次声明同一个接口名称
interface PointTtype2 {
  x: number,
  y: number
}

interface PointTtype2 {
  z: number
}

const point: PointTtype2 = { x: 0, y: 0, z: 0 }

// 3.interface支持继承
interface IPerson {
  name: string,
  age: number
}

interface Ikun extends IPerson {
  kouhao: string
}

const ikun1: Ikun = {
  kouhao: '你干嘛',
  name: "kobe",
  age: 18
}

// 4.interface可以被类实现的
// class Person implements IPerson {

// }

// 总结：如果是非对象类型的定义使用type，如果是对象类型的声明那么使用interface

export { }