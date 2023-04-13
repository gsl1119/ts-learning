import { sum } from './utils/math'
import { price, date } from "./utils/format";
// 导入的是类型，推荐在类型前面加上type关键字
// import type { IDType, IPerson } from "./utils/type";


console.log(sum(20, 30));

const id1: IDType = 111
const p: IPerson = { name: 'why', age: 12 }


// 使用命名空间中的内容
price.format('111')
date.format('22222')

let doc: Document
// let promise = new Promise()