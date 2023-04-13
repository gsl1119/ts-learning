// const foo = function foo() {

// }

// const f = new foo()

class Person {

}

interface ICTORPerson {
  new(): Person
}


function factory(fn: ICTORPerson) {
  // return new fn()
  const f = new fn()
}

factory(Person)