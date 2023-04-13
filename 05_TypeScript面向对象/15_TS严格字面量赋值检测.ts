interface IPerson {
  name: string;
  age: number;
}
// 现象一 ：
const obj = {
  name: "why",
  age: 18,

  // 多增加height属性
  height: 1.88
}

// 定义info，类型是IPerson类型
const info: IPerson = obj
// 现象二：
function printPerson(person: IPerson) {

}
const kobe = { name: "kobe", age: 30 }
printPerson(kobe)

// 解释现象
// 第一次创建的对象字面量，成为fresh（新鲜的）
// 对于新鲜的字面量，会进行严格的类型检测，必须完全满足类型的要求（不能有多余的属性0）

const obj2 = {
  name: "why",
  age: 18,
  height: 1.88
}

const p: IPerson = obj2

export { }

