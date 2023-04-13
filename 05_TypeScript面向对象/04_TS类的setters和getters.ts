class Person {
  private _name: string;
  private _age: number
  // age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age
  }
  running() {
    console.log("running", this._name);

  }

  // setter/getter:堆属性的访问进行拦截操作
  public set name(newValue: string) {
    this._name = newValue;
  }

  public get name() {
    return this._name
  }



  public set age(v: number) {
    if (v >= 0 && v < 200) {
      this._age = v;
    }
  }
  get age() {
    return this._age
  }

}

// 类和实例之间的关系
const p = new Person('why', 18);
// console.log(p.name, p.age);

// p.name = 'kobe'  // 只读属性不能赋值 

export { }