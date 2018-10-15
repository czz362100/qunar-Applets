//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      url:[
          'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png',
          'http://dimg04.c-ctrip.com/images/700s0x000000l8o6o1D82_750_150_25.jpg',
          'http://dimg04.c-ctrip.com/images/700f0w000000kgxju7669_750_150_25.jpg',
          'http://dimg04.c-ctrip.com/images/700k0x000000l5tbb7610_750_150_25.jpg',
      ],
      icon:[
          {
                url:'../../source/icon/WIFI.png',
                name:'签证·WIFI'
          }, {
              url: '../../source/icon/coin.png',
              name: '外币兑换'
          }, {
              url: '../../source/icon/guider.png',
              name: '当地向导'
          }, {
              url: '../../source/icon/renzheng.png',
              name: '保险·签证'
          }, {
              url: '../../source/icon/shopping.png',
              name: '购物'
          }, {
              url: '../../source/icon/travel.png',
              name: '自由行'
          }
      ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
