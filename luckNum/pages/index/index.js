//index.js
var util = require('../../utils/util.js');
//获取应用实例
const app = getApp()
 
Page({
  data: {
    //text:"",
    tip: '****************************************',
    result: "",
    data: "",
  },

  onLoad: function (options) {
    //日期获取， 请求网络数据
    var time = util.formatTime(new Date())
    var month = util.getMonth(new Date())
    var day = util.getDay(new Date())
    
    console.log("enter month ", month)
    if (month < 10){
      month = '0' + month;
      console.log("get month", month)
    }
    console.log("enter day ", day)
    if (day < 10){
      month = '0' + day;
      console.log("get day", day)
    }
       
    try{
      var that = this; //reason:pointer this will be changed
      wx.request({
          url:"https://baike.baidu.com/cms/home/eventsOnHistory/"+ month +".json",
          header:{
              "Content-Type":"application/json"
          },
          success:function(res){
              //console.log(res.data[month][month+day])
              that.setData({
                result : res.data[month][month+day]  //取出 当天 数据
              })
          },
          fail:function(err){
              console.log(err)
          }
          })
    } catch (e ){
      console.log(e )
    }

  //为页面中时间变量赋值
  this.setData({
    time: time,
    month: month,
    day: day,
     
  })
  },  // onload end
  
});


 
