class Person {
  constructor(public name: string, public age: number, public height: number) {

  }

  running() {
    console.log("testy");

  }

}

const p = new Person('why', 18, 1.88)
console.log(p.name);



export { }