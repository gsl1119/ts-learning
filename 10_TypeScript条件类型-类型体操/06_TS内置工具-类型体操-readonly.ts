interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
// type HYPartial<T> = {
//   [P in keyof T]?: T[P]
// }

type HYReadonly<T> = {
  readonly [p in keyof T]: T[p]
}


// IKun都变成可选的
// type IKunOptional = HYPartial<IKun>
type IKunOptional = HYReadonly<IKun>


export { }