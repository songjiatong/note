const http=require("http");
const url=require("url");
//假设有服务端接口: http://xxx/?type=a, http://xxx/?type=b, http://xxx/?type=c 分别返回a类商品的总是，b类商品的总数，c类商品的总数
//如何获得a类, b类, c类商品的总和
http.createServer((req,res)=>{
  var query=url.parse(req.url,true).query;
  var type=query.type;
  var callback=query.callback;
  if(type=="a"){
    res.write(`${callback}(JSON.parse('${JSON.stringify({type:"a",count:30})}'))`);
  }else if(type=="b"){
    res.write(`${callback}(JSON.parse('${JSON.stringify({type:"b",count:20})}'))`);
  }else if(type=="c"){
    res.write(`${callback}(JSON.parse('${JSON.stringify({type:"c",count:40})}'))`);
  }
  setTimeout(function(){
    res.end();
  },10000)
}).listen(5050);