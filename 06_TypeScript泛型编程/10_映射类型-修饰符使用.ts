type MapIPerson<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property]
}

interface IPerson {
  name: string;
  age: number;
  height: number;
  address: string;
}

type IPersonOptional = MapIPerson<IPerson>
const p: IPersonOptional = {
  name: "why",
  age: 18,
  height: 1.88,
  address: '广州市'
}


export { }