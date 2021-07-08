// miniprogram/pages/cloudrun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weathers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    // 确认已经在 onLaunch 中调用过 wx.cloud.init 初始化环境
    const res = await wx.cloud.callContainer({
      config: {
        env: 'developer-5go82mus0ab900cb',
      },
      path: '/WeatherForecast', // 填入业务自定义路径和参数
      method: 'GET',
      header: {
        'X-WX-SERVICE': 'workshare', // 填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）
      }
      // 其余参数同 wx.request
    });
    console.log(res)
    this.setData({
      weathers: res.data
    })
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

  }
})