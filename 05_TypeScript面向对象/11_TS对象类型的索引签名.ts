interface ICollection {
  // 索引签名
  [index: string]: number
  length: number;
}

// const names = ['abc', 'bac', 'asd']
const names = [123, 222, 333]

console.log(names[0]);

function interatorCollection(collection: ICollection) {

}

// interatorCollection(names)
// const tuple: [string, string] = ['why', '18']
// interatorCollection(tuple)


interatorCollection({ name: 111, age: 18, length: 10 })


export { }