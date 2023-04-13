interface IKun {
  name: string
  age?: number
  slogan?: string
}
// 确实keys一定是可以作为key的联合类型
type HYOmit<T, K extends keyof T> = {
  [p in keyof T as p extends K ? never : p]: T[p]
}



type IKunOptional = HYOmit<IKun, 'name' | 'age'>
export { }