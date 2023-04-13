// 1.普通的实现
// function getLength(arg) {
//   return arg.length
// }

// 2.函数的重载
// function getLength(arg: string): number
// function getLength(arg: any[]): number
// function getLength(arg) {
//   return arg.length
// }

// getLength('aaaa')
// getLength([123, 31, 43])

// 3.联合类型的实现(可以使用联合类型实现的情况下，尽可能使用联合类型)
// function getLength(arg: string | any[]) {
//   return arg.length;
// }

// 4.对象类型实现
// function getLengt(arg: { length: number }) {
//   return arg.length;
// }

// getLength('aaaa')
// getLength([123, 31, 43])

