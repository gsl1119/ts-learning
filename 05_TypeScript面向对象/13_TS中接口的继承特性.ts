interface IPerson {
  name: string;
  age: number;
}

// 可以减少其他接口中继承过来属性
// 1.减少了相同代码的重复编写
// 2.如果使用第三方库，给我们定义了一些属性，自定义接口，同时希望定义的接口拥有第三方某一个类型中的所有的属性
// 就可以使用接口使用

interface IKun extends IPerson {
  solgan: string
}

const ikun: IKun = {
  name: "why",
  age: 18,
  solgan: 'aaa'
}

export { }