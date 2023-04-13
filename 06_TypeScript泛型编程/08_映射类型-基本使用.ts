// TypeScript提供了映射类型,函数
// 映射类型不能使用interface定义
// Type = IPerson
// keyof Type = name|age
type MapPerson<Type> = {
  // [index: number]: any
  // 索引类型依次进行使用
  [AAA in keyof Type]: Type[AAA]
}

interface IPerson {
  name: string;
  age: number;
}


// 拷贝一份IPerson
interface NewPersom {
  name: string;
  age: number;
}

export { }