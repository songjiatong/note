// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let db=wx.cloud.database();
    let connect=db.collection('movies');
    connect.field({
      content:true,
      'writer.nickname':true
    }).where({
      'movieId':db.command.eq(options.id)
    }).get({
      success:res=>{
        this.setData({
          comments:res.data
        })
   
      }
    })


    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/'+options.id+'?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method:'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded ' 
      },
      success:res=>{
        this.setData({
          detail:res.data
        })
        console.log(this.data.detail)
      }  
    })
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

  }
})