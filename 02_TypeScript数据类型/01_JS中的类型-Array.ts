// 明确的指定<数组>的类型注解：
// 1.string[]:数组类型，并且数组中存放的字符串类型
// 2.Array<number>:数组类型，数组中存放的是数字

// 注意事项：在真实的开发中，数组一般存放相同的类型，不要存放不同的类型

let names:string[] = ['abc', 'cba','nba']
names.push("aaa")
// names.push(123) // 错误

let nums:Array<number> = [12,32.11]
export{}