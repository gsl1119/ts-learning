// 在没有对TS进行特殊配置的

// 在设置配置选项(编译选项compilerOptions,noImplicitThis设置为true，不允许模糊的this存在)
// 1.对象中的函数中的this

const obj = {
  name: 'why',
  studying: function () {
    // 默认情况下，this时any类型
    console.log(this.name, 'studying');
  }
}
// 2.普通的函数
// function foo() {
//   console.log(this);

// }


obj.studying()
// obj.studying.call({})

// 普通的函数 
function foo(this: { name: string }, info: { name: string }) {
  console.log(this)
}

// window.foo({ name: 'why' })
foo.call({ name: 'why' }, { name, 'kobe'})
export { }