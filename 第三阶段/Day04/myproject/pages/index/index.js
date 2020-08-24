//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //存储轮播图的文告
    swiperMovies:[],
    //存储各类的影片信息--对象类型
    boards:{
      //正在上映的影片
      'new':[],
      //即将上映的影片
      'coming':[],
      //TOP250的影片
      'top250':[]
    }
  },
  
  //加载影片信息
  /**
   * type表示影片的类型,字符串,可选值有in_theater coming_soon top250
  */
  loadMovies(type,count){
    wx.request({
      url: 'https://api.douban.com/v2/movie/' + type + '?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=' + count,
      method:'GET',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        //console.log(res.data.subjects);
        this.setData({
          //怎么将变量变量名称?
          'boards.type':res.data.subjects
        });
      }
    });   
  },
  onLoad: function () {
    //获取轮播广告 
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10',
      method:'GET',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        this.setData({
          swiperMovies:res.data.subjects
        })
      }
    });


    //获取现在上映的电影

    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=4',
      method:'GET',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        //console.log(res.data.subjects);
        this.setData({
          //怎么将变量变量名称?
          'boards.new':res.data.subjects
        });
      }
    });       

    //获取即将上映的影片
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=4',
      method:'GET',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        this.setData({
          'boards.coming':res.data.subjects
        });
      }
    });    

    //获取TOP250的影片
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=12',
      method:'GET',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        this.setData({
          'boards.top':res.data.subjects
        });
      }
    });     
  }
})
