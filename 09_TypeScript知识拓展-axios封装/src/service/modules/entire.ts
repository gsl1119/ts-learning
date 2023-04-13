import { hyRequest2 } from "..";

interface IHightScoreData {
  list: any[];
  subtitle: string
  title: string
  type: string
  _id: string
}


hyRequest2.request({
  url: "/entire/list",
  params: {
    offset: 0,
    size: 20
  }
}).then(res => {
  console.log(res);
})

// new Promise<string>((resolve, reject) => {
//   resolve('哈哈哈')
// }).then(res => {
//   // console.log(res as any);
// })



hyRequest2.request<IHightScoreData>({
  url: "/home/highscore",
  interceptors: {
    requestSuccessFn: config => {
      console.log("/home/hightscore请求成功");
      return config
    },
    responseSuccessFn: res => {
      console.log("/home/hightscore响应成功");
      return res
    }

  }
}).then(res => {
  console.log(res.list, res.subtitle);
})