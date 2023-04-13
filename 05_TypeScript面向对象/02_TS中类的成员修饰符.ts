class Person {
  protected name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  private eating() {
    console.log('吃东西', this.age);

  }
  // constructor(public name: string, public age: number) {

  // }
}

// const p = new Person('why', 18);
// console.log(p.name, p.age);
// p.name = 'kobe'
// p.eating()


// 子类中是否可以访问
class Student extends Person {
  studying() {
    console.log('在学习', this.name);
  }
}




export { }