import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

const notify = () => {
  // let receiver = prompt("请输入您的邮箱以接收反馈信息:", "xxx@xx.xx");
  const fetchData = async () => {
    const email = prompt("请输入您的邮箱以接收测试反馈:", "Example: xxx@xx.xx");
  
    if (!(email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)) {
      alert("邮箱格式不正确")
      throw ("邮箱格式不正确")
    }
      

    await fetch("http://192.168.3.39:8086/sends", {
      //不能直接使用 wmzspace.space域名, 因为 域名开启了https防窜站
      method: "POST",
      mode: "cors", //之前是no-cors
      //same-origin - 同源请求，跨域会报error
      //no-cors - 默认，可以请求其它域的资源，不能访问response内的属性
      //cros - 允许跨域，可以获取第三方数据，必要条件是访问的服务允许跨域访问
      //navigate - 支持导航的模式。该navigate值仅用于HTML导航。导航请求仅在文档之间导航时创建。
      body: `receiver=${email}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        // 'Content-Type': 'multipart/form-data;charset=utf-8', //非文本内容
        // 'Content-Type': 'multipart/form-data;boundary=------FormBoundary15e896376d1'
      },
    })
      .then((res) => {
        if (res.ok) {
          //数据解析方式
          res
            //.arrayBuffer() // ArrayBuffer/ArrayBufferView
            .json() // Json file, need JSON.stringify(...)
            // .text() // String
            //.blob()        // Blob/File
            //.formData()    // FormData
            .then((res) => {
              // alert(res.receiver)
            });
        } else {
          // alert("no");
          throw "";
        }
      })
      .catch((err) => {
        // alert(err);
        console.log("err:", err);
        throw err;
      });
  };

  const myPromise = fetchData();
  toast.promise(myPromise, {
    loading: "邮件准备中...",
    success: <>发送成功</>,
    error: <>发送失败</>,
  });
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            点击 <code>下方按钮</code> 开始邮箱测试
          </p>
          <div>
            <button onClick={notify} className="btn btn-primary">
              开始测试
            </button>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
