// 可选参数的类型是什么？
function foo(x: number, y?: number) {
  // console.log(y + 20);
  if (y !== undefined) {
    console.log(y + 20)
  }
}

foo(10)
foo(10, 20)

export { }