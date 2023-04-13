// 传入的key的类型，obj当中key的其中之一

interface IKun {
  name: string;
  age: number;
}

type IKunKeys = keyof IKun; // "name" | "age"

function getObjectPropertie<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const info = {
  name: "why",
  age: 18,
  height: 18
}

const name = getObjectPropertie(info, "name")

export { }