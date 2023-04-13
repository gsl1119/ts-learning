// 抽象类不能实例化
abstract class Shape {
  // 只有声明没有实现
  // 可以将这个方法变成一个抽象方法
  abstract getArea(): any
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea() {
    return this.width * this.height;
  }
}



function caluArea(shape: Shape) {
  return shape.getArea();
}

caluArea(new Rectangle(10, 20))
caluArea(new Circle(5))

export { }