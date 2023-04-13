class Person {

}

/**
 * 类的作用：
 * 1.可以创建类对应的实例对象
 * 2.类本身可以作为这个实例的类型
 * 3.类也可以当作一个具有构造签名的函数
 */



const name: string = "aaa"
const person: Person = new Person()

function printPerson(person: Person) { }

function factory(ctor: new () => void) { }
factory(Person)



export { }