// 在没有对TS进行特殊配置的qong
// 1.对象中的函数中的this

const obj = {
  name: 'why',
  studying: function () {
    // 默认情况下，this时any类型
    console.log(this.name.length, 'studying');
  }
}
// 2.普通的函数
function foo() {
  console.log(this);

}
obj.studying()
obj.studying.call({})