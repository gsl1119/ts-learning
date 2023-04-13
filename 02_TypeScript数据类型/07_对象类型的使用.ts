// 1.对象类型的简单回顾
const info:{
  name:string,
  age:number
  z?:number
} = {
  name:"why",
  age:18
}

// 2.对象类型和函数类型结合使用
type pointType = {x:number,y:number}
function printCoordinate(point:pointType) {
  console.log("x坐标",point.x);
  console.log("y坐标",point.y);
}

// printCoordinate(123)
printCoordinate({x : 20,y : 30})