// 函数的参数可以是默认值
// 1.有默认的情况下，参数的类型注解可以省略
// 2.有默认值的参数，可以接收一个undefined的值
function foo(x: number, y: number = 100) {

}
foo(10, 20)
foo(10)
foo(10, undefined)

export { }