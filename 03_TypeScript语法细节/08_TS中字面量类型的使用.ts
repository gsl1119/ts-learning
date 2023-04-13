// 1.字面量类型的基本上

const name: "why" = "why"
let age: 18 = 18

// 2.讲多个字面量类型联合起来
type Direction = "left" | "right" | "up" | "down"
const d1: Direction = "left"


// 例子
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {

}

request('http://baidu.com', "post")

// TS细节
// const info = {
//   url: "xxxx",
//   method: "post"
// }
// 下面的做法是错误的：info.method获取的是string类型
// request(info.url, info.method)

// 解决方案一：类型断言
// request(info.url, info.method as "post")

// 解决方案二:直接让info对象类型是一个字面量类型

const info: { url: string, method: MethodType } = {
  url: "xxxx",
  method: "post"
}

request(info.url, info.method)


export { }