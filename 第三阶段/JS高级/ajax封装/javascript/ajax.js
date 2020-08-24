function ajax(url,type,data){
  //4个参数
  //  1.url:请求的目标服务端接口地址
  //  2.type:请求的方法
  //  3.callback:
  //  4.data:如果是get请求时，要传递的参数，要求：
  //          1). "变量1=值1&变量2=值2&..."
  //          2). 要带问号
  //          3). 且必须是字符串
  var xhr=new XMLHttpRequest();
  if(type=="get"&&data!==undefined){
    url+="?"+data;
  }
  xhr.open(type,url,true);
  xhr.onreadystatechange=function(){
    if(xhr.onreadystate==4){
      var result=JSON.parse(xhr.responseText);
    }
  }
  if(type=="post"){  //是post请求时，才需要设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  }
  if(type=="post"){   //只有是post请求时，才需要带参数
    xhr.send(data);
  }else{
    xhr.send();
  }
}