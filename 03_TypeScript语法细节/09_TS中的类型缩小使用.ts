// 1.typeof：使用最多
function printID(id: number | string) {
  // console.log(id);
  if (typeof id === "string") {
    console.log(id.length, id.split(" "))
  } else {
    console.log(id);
  }
}

// 2.方向的类型判断
type Direction = "left" | "right" | "up" | "down"
function swichDirction(direction: Direction) {
  if (direction === "left") {
    console.log("左");
  } else if (direction === "right") {
    console.log("右");
  } else if (direction === "up") {
    console.log("上");
  } else if (direction === "down") {
    console.log("下");
  }
}

// 3.传入一个日期，打印日期
function printDate(date: string | Date) {
  // if (typeof date === "string") {
  //   console.log(date)
  // } else {
  //   console.log(date.getTime())
  // }
  if (date instanceof Date) {
    console.log(date.getTime());
  } else {
    console.log(date)
  }
}

// 4.判断是否有某一个属性
interface ISwim {
  swim: () => void
}

interface IRun {
  run: () => void
}

function move(animal: ISwim | IRun) {
  // swim: function() { }
  if ("swim" in animal) {
    animal.swim()
  } else if ("run" in animal) {
    animal.run()
  }
}

const fish: ISwim = {
  swim: function () { }
}

const dog: IRun = {
  run: function () { }
}

move(fish)