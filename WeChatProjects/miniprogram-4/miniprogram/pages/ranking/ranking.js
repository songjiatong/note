// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    page:1,
    total:0,
    pagecount:10,
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10',
      method:'GET',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:res=>{
        this.setData({
          movies:res.data.subjects,
          total:res.data.total
        })
      }
    });
    wx.hideLoading();
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
    let pagesize=Math.ceil(this.data.total/this.data.page);

   
    let page=this.data.page;
    page++;
   
    let start=(page-1)*this.data.pagecount;

    
    if(page<=pagesize){
      wx.showLoading({
        title: '努力加载中...',
        mask:true
      });

      wx.request({
        url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start='+start+'&count='+this.data.pagecount,
        method:'GET',
        header:{
          'content-type':'application/x-www-form-urlencoded',
        },
        success:res=>{
          let movies=this.data.movies;
          //let newMovies=movies.concat(res.data.subjects);
          res.data.subjects.forEach(item=>{
            movies.push(item);
          })
          this.setData({
            movies:movies,
            total:res.data.total
          })
        } 
      });

      this.setData({
        page:page
      });
      wx.hideLoading();
    }else{
      this.setData({
        hasMore:false
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})