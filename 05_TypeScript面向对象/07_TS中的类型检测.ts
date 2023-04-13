// TS对类型检测的时候使用的是鸭子类型
// 
class Person {
  constructor(public name: string, public age: number) { }
}

class Dog {
  constructor(public name: string, public age: number) { }
}

function printPerson(p: Person) {
  console.log(p.name, p.age);
}

printPerson(new Person('why', 18))

printPerson({ name: 'kobe', age: 18 })

printPerson(new Dog('test', 3))

const person: Person = new Dog('果汁', 15)

export { }