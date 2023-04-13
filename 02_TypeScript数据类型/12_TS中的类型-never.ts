// 一、实际开发中只有进行类型推导时，可能会自动推导出来时never类型，但是很少使用它
// 1.一个函数是死循环
// function foo() :never{
//   // while(true){
//   //   console.log("-------");
//   // }

//   throw  new Error("123")
// }

// foo()

// 2.解析歌词的工具
function parseLyric() {
  return []
}

// 二.封装框架/工具库的时候可以使用never
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log(message.length);
      break

    case "number":
      console.log(message);
      break
    
    case "boolean":
      console.log(Number(message));
      break
      
    default:
      const check: never = message
  }
}

handleMessage("aaaa")
handleMessage(1234)

// 调用函数
handleMessage(true)

export { }