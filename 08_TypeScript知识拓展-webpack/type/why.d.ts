declare module "lodash" {
  export function join(...args: any[]): any
}

// 为我们子的变量/函数/类定义类型声明
declare const whyName: string
declare const whyAge: number
declare const whyHeight: number
declare function foo(bar: string): string
declare class Person {
  constructor(public name: string, public age: number)
}


