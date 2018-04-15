// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '无',
    price_hk: 0,
    rate: 1,
    price_cny: 0,
    price:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  priceHkChange: function(event) {
    console.log(this.data,'ev')
    const price_hk = event.detail.value;
    if(price_hk) {
      const price_cny = price_hk * this.data.rate
      this.setData({ price_hk, price_cny });
    }
    
    // this.setData({ price_hk });
  },
  rateChange: function (event) {
    // console.log(ev,'ev')
    const rate = event.detail.value;
    // const { detailInfo } = this.data;
    // detailInfo.benisons_txt = content;
    const price_cny = rate*this.data.price_hk
    this.setData({ rate, price_cny });
  }
})