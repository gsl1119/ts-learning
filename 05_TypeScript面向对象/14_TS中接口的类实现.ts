interface IKun {
  name: string;
  age: number;
  slogan: string
  playBaskeyball: () => void
}

interface IRun {
  running: () => void
}


const ikun: IKun = {
  name: "why",
  age: 18,
  slogan: "asd",
  playBaskeyball: function () { }
}

// 作用：接口被类实现
class Person implements IKun, IRun {
  name: string;
  age: number;
  slogan: string;
  playBaskeyball() { }
  running() { }
}

const ikun2 = new Person()
console.log(ikun2.name, ikun2.age, ikun2.slogan);



export { }