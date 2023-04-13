import hyRequest from "..";
import { BASE_URL } from "../config";

// 发送网络请求
// hyRequest.post("")
// hyRequest.request({
//   url: '/home/multidata',
// }).then(res => {
//   console.log("========================");
//   console.log(res.data);
// })

interface IHomeData {
  data: any,
  returnCode: string
  success: boolean
}

hyRequest.request<IHomeData>({
  url: "/home/mulidata"
}).then((res) => {
  console.log(res);

})