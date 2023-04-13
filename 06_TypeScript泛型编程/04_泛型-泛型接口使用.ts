interface IKun<Type = string> {
  name: Type;
  age: number;
  slogan: Type
}

const kunkun: IKun<number> = {
  name: 666,
  age: 18,
  slogan: 2323
}

const ikun3: IKun = {
  name: 'kobe',
  age: 18,
  slogan: 'asdas'
}


export { }