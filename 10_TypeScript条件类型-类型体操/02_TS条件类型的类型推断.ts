type CalcFnType = (num1: number, num2: string) => number


function foo() {
  return 'abc'
}
// 总结类型体操题目:MyReturnType

type HYMyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
type HYMyParamterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never



// 获取一个函数的返回值类型
type CalcReturnType = ReturnType<CalcFnType>
type FooReturnType = ReturnType<typeof foo>

type CalcParamterType = HYMyParamterType<CalcFnType>


export { }