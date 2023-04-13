type IKun = 'sing' | 'dance' | 'rap'
// 确实keys一定是可以作为key的联合类型
type HYExtract<T, E> = T extends E ? T : never



type IKunOptional = Extract<IKun, 'rap' | 'sing'>
export { }