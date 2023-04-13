class Person {
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 类和实例之间的关系
const p = new Person('why', 18);
console.log(p.name, p.age);

// p.name = 'kobe'  // 只读属性不能赋值 

export { }