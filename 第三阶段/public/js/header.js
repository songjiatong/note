$(function(){
  $.ajax({
    url:"/header.html",
    //type:"get",
    success:function(result){
      $("#header").html(result);
      $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    }
  })
  // $("#header")
  // .load(
  //   "/header.html",
  //   //在请求结束后，自动帮助添加header.css到<head>结尾
  //   //无需手动添加<link>
  //   function(){
  //     //创建一个Link元素
  //     $(`<link rel="stylesheet" href="css/header.css">`)
  //     //将link元素添加到head元素中
  //     .appendTo("head");
  //   }
  // )
  // $.ajax({
  //   url:"http://localhost:5050/weather",
  //   success:function(result){
  //     console.log(result);
  //   }
  // })
})