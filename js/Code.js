// 定义一个数组数据，用于给页面获取
// let arrList = [
//   {
//     num: "01",
//     name: "玄女",
//     plan: "南天门计划",
//     time: "2050-01-01",
//     concept: "空天战机",
//   },
//   {
//     num: "02",
//     name: "鸾鸟",
//     plan: "南天门计划",
//     time: "2050-01-01",
//     concept: "空天载机平台",
//   },
//   {
//     num: "03",
//     name: "承影",
//     plan: "南天门计划",
//     time: "2050-01-01",
//     concept: "战术机甲",
//   },
// ]

$.ajax({
  // 获取链接数据的方式
  method: "get",
  // 请求数据的连接
  url: "./Code/avic.json",
  dataType: "json",
  headers: {
    // 允许如何形式的跨域
    "Access-Control-Allow-Origin": `*`,
  },
  // 成功之后运行一下代码
  success: function (data) {
    // 调用页面渲染数据的函数
    contentNode(data)
  },
  // 以下是请求数据失败
  error: function () {
    console.log("Failed to load JSON file.")
  },
})

const personList = document.getElementById("personList")

// 页面渲染数据的函数
function contentNode(data) {
  // 根据数组数据来遍历，拿到arrList里面的数据并渲染出来
  console.log(data, ">>>>>>>>>>>>dataNode")
  const arrList = data

  // ----------------------------------------
  // 定义一个数组，用来存放内容
  let strList = ""
  arrList.forEach(function (item) {
    strList += `
  
  <div  class="square">
            <div class="content">
                <span class="num-w">${item.num}</span>
                <span class="concept-t">${item.concept}</span>

            </div>
            <div class="content-item">
                <div class="userName">
                    <span>名称：</span>
                    <span>${item.name}</span>
                </div>
                <div class="mfAddress">
                    <span>计划：</span>
                    <span>${item.plan}</span>
                </div>
            </div>

            <div class="cont-time">
                ${item.time}
            </div>
            </div>
             <div class="dividing-line"></div>
        `
  })
  personList.innerHTML += strList
}
