//index.js
const app=getApp();
console.log(app.globalData);
Page({
  data: {
    swiperArray:[],
    boards:{
      coming_soon:{
        start:0,
        count:4,
        movies:[],
        title:''
      },
      new_movies:{
        start:0,
        count:12,
        movies:[],
        title:''
      },
      top250:{
        start:0,
        count:10,
        movies:[],
        title:''
      }
    },
  },

  loadMovies(type,start,count){
    wx.request({
      url: 'https://api.douban.com/v2/movie/'+ type +'?apikey=0df993c66c0c636e29ecbb5344252a4a&start='+start+'&count='+count,
      method:'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success:res=>{
        let object={};
        object['boards.'+type+'.movies']=res.data.subjects;
        object['boards.'+type+'.title']=res.data.title;
        this.setData(object)
      }
    });
  },

  onLoad(options){
    // 循环加载数据
    Object.keys(this.data.boards).map(item=>{
      this.loadMovies(item,this.data.boards[item].start,this.data.boards[item].count)
    })
    console.log(this.data.boards);
    // 轮播
    wx.request({
      url: 'https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method:'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded ' 
      },
      success:res=>{
        //console.log(res.data.subjects);
        this.setData({
          
          swiperArray:res.data.subjects
        })
      }
    });
    // 即将上映
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a&start=4&count=4',
    //   method:'GET',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded ' 
    //   },
    //   success:res=>{
    //     this.setData({
    //       coming_soon:res.data.subjects
    //     })
    //   }
    // });
      // 正在热映
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a',
    //   method:'GET',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded ' 
    //   },
    //   success:res=>{
    //     this.setData({
    //       new_movies:res.data.subjects
    //     })
    //   }
    // });
    
    // TOP250
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10',
    //   method:'GET',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded ' 
    //   },
    //   success:res=>{
    //     this.setData({
    //       TOP250:res.data.subjects
    //     })
    //   }
    // });
  }
})
