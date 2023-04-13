type MapIPerson<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property]
}

interface IPerson {
  name: string;
  age?: number;
  readonly height: number;
  address: string;
}

type IPersonRequired = MapIPerson<IPerson>
// const p: IPersonOptional = {}

const p: IPersonRequired = {
  name: "why",
  age: 18,
  height: 1.88,
  address: '广州市'
}


export { }