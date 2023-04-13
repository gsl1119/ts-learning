interface IKun {
  name: string
  age?: number
  slogan?: string
}

type HYPick<T, K extends keyof T> = {
  [p in K]: T[p]
}



type IKunOptional = HYPick<IKun, 'name' | 'age'>
export { }