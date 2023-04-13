interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
// type HYPartial<T> = {
//   [P in keyof T]?: T[P]
// }
// name|age|slogan
type keys = keyof IKun
type Res = keyof any // =>number|string|smybol
// 确实keys一定是可以作为key的联合类型
type HYRecord<Keys extends keyof any, T> = {
  [p in Keys]: T
}


// IKun都变成可选的
// type IKunOptional = HYPartial<IKun>
type t1 = '上海' | '北京' | '洛杉矶'
type IKunOptional = HYRecord<t1, IKun>

const ikuns: IKunOptional = {
  '上海': {
    name: 'xxxx',
    age: 10
  },
  '北京': {
    name: 'yyy',
    age: 12
  },

  '洛杉矶': {
    name: 'qqq',
    age: 112
  }


}


export { }