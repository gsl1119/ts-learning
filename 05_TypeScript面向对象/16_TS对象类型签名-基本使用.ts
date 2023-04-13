// interface IPerson {
//   name: string;
//   age: number;
//   height: number;
// }

// const p: IPerson = {
//   name: "why",
//   age: 18,
//   height: 1.88
// }

// console.log(p.address);


// 索引签名理解
interface InfoType {
  // 索引签名:可以通过字符串索引，去获取到一个值，也是字符串
  [key: string]: string
}

function getArray(): InfoType {
  const abc: any = '111'
  return abc
}

const info = getArray()
const name = info['name']
console.log(name, info.age);


// 2.索引签名的案例
interface ICollection {
  [index: number]: string
  length: number
}
function printCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(collection[i].length);
  }
}


const names = ['abc', 'ca', 'dass']
const tuple: [string, string] = ['why', '广州']
printCollection(names)
printCollection(tuple)


export { }