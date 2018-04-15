//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (data) {
          console.log(data)
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              var params = {
                code: data.code,
                user_info: res.userInfo
              }
              var url = that.globalData.url + '/api/openid'
              wx.request({
                url:url,
                data:params,
                success:function(resa){
                  console.log(resa,'resa')
                  if(resa.data.status){
                    that.globalData.openid = resa.data.res.openid;
                  }
                }
              })
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null,
    url:'https://smallcode.chenqingpu.cn'
  }
})
