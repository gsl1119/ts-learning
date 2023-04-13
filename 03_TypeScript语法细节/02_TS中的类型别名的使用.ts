// 类型别名：type
type MyNumber = number
const age: MyNumber = 18

// 给ID的类型起一个别名
type IDType = number | string

function printID(id: IDType) {
  console.log(id);
}
type PointType = { x: number, y: number, z?: number }
// 打印坐标
function printCoordinate(point: PointType) {
  console.log(point.x, point.y, point.z)
}
