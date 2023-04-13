// 方案一：函数类型的表达式function type expression
// 格式:(参数列表)=>返回值
type BarType = (num1: number) => number
const bar: BarType = (arg: number): number => {
  return 123
}


export { }