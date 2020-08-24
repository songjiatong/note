$(function(){
  $.ajax({
    url:"http://localhost:5050/index",
    dataType:"json",
    success:function(result){
      console.log(result);
    }
  })
  // $.getJSON("http://localhost:5050/index?callback=?",function(result){
  //   console.log(result);
  // })
})