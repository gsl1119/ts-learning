import { sum } from "./utils/math";
import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance } from "axios";

import _ from 'lodash'

const message: string = 'Hello world'
console.log(message.length, message);
console.log(sum(20, 30));

const h2El = document.createElement('h2')
h2El.textContent = 'Hello Message'
document.body.append(h2El)

// lib
const promise = new Promise((resolve, reject) => { })
console.log(message.startsWith('Hello'));


console.log(_.join(['abc', 'cba']));

// 给自己代码添加类型声明文件
// 平时使用的代码中用到的类型，直接在当前位置进行定义或者在业务文件夹某一个位置编写一个类型文件即可
type IDType = number | string
interface IKun {
  name: string
  age: number
  slogan: string
}
const id1: IDType = 123


// 需要编写类型声明
console.log(whyName, whyAge, whyHeight);
console.log(foo('why'));

const p = new Person('why', 18)
console.log(p.name, p.age);



