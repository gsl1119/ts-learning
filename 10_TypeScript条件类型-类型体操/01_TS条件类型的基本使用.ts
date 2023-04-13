type IDType = number | string

// 判断number是否是extendsIDType

// const res = 2 > 3 ? true : false

type ResType = boolean extends IDType ? true : false

// 举个例子:函数重载
// function sum(num1: number, num2: number): number
// function sum(num1: string, num2: string): string
// 错误做法,类型扩大化
// function sum(num1: number | string, num2: number | string): string

function sum<T extends number | string>(num1: T, num2: T): T extends number ? number : string
function sum(num1, num2) {
  return num1 + num2;
}

const res = sum(10, 20)
