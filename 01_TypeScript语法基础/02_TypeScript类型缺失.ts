function getLength(args:{length:number}) {
  return args.length
}

getLength("aaaaa")
getLength(["abc","cba","nba"])
const info = {
  length:100
}

getLength(info)
// getLength(123) // 错误
getLength('123')

export {}