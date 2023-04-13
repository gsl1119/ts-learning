// TypeScript对于传入的函数类型的参数个数不进行检测
type CalcType = (num1: number, num2: number) => number
function calc(calcFn: CalcType) {

}

calc(function () {
  return 123
})

// forEach例子
const names = ["abc", 'cba', "nba"]
names.forEach(function (item) {
  console.log(item.length);

})

// TS对于很多类型的检测报不报错，取决于他的内部规则
// 举个例子
interface IPerson {
  name: string,
  age: number
}

const p = {
  name: "why",
  age: 18,
  height: 1.88
}

const info: IPerson = p

export { }