// pages/pages01/pages01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'cloud://sjtserve02.736a-sjtserve02-1302431998/background.jpg',
    nickname:'',
    age:1,
    education:'',
    married:0
  },
  f1(){
    wx.chooseImage({
      count: 1,
      sourceType:['album','camera'], 

      success:res=>{
        this.setData({
          src:res.tempFilePaths[0]
        })
        let oldName=res.tempFilePaths[0];
        let extention=oldName.substr(oldName.lastIndexOf('.')+1).toLocaleLowerCase();
        let mainName=""+Date.now()+Math.ceil(Math.random()*10000);
        let fileName=mainName+'.'+extention;
        wx.cloud.uploadFile({
          filePath:res.tempFilePaths[0],
          cloudPath:'image/'+fileName
        })
      }
    })
  },
  add(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    connet.add({
      data:{
      nickname:this.data.nickname,
      age:this.data.age,
      otherInfo:{
        education:this.data.education,
        isMarried:this.data.married
      }
      },
      success:res=>{
        console.log(res);
        this.setData({
          nickname:'',
          age:'',
          education:'',
          married:''
        })
      }
    })
    
  },
  getAll(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    connet.get({
      success:res=>{
        console.log(res);
      }
    })
  },
  getOther(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    connet.field({
      nickname:true,
      age:true,
      "otherInfo.education":true
    }).get({
      success:res=>{
        console.log(res);
      }
    })
  },
  getByCloudtion(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    connet.field({
      nickname:true,
      age:true
    }).where({
      age:db.command.gte(23)
    }).get({
      success:res=>{
        console.log(res);
      }
    })
  },
  getData(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    // connet.where(db.command.and([
    //   {age:db.command.gte(30)},
    //   {sex:db.command.eq(true)}
    // ]))
    connet.where({
      'openid':db.command.exists(false)
    })
    .get({
      success:res=>{
        console.log(res);
      }
    })
  },
  getageAvg(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    connet.aggregate()
    .group({
      _id:null,
      averAge:db.command.aggregate.avg('$age')
    }).end({
      success:res=>{
        console.log(res);
      }
    })
  },
  changeAge(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    connet.where({
      age:db.command.neq(0)
    }).update({
      data:{
        'age':db.command.inc(10)
      } 
    })
  },
  removeId(){
    let db=wx.cloud.database();
    let connet=db.collection('comments');
    connet
    // .where({
    //     "_id":db.command.eq("2a0398605f1a960200644f2421abbf4e")
    // })
    .doc('2a0398605f1a960200644f2421abbf4g')
    .remove();
  },
  getFun(){
    wx.cloud.callFunction({
      name:'test',
      data:{
        a1:10,
        a2:20
      },
      success:res=>{
        console.log(res);
      }
    }) 
  },
  getDatabase(){
    wx.cloud.callFunction({
      name:'getAllcomments',
      success:res=>{
        console.log(res);
      }
    })
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

  }
})