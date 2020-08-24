const express=require('express');
const cors=require('cors');
const pool=require('./pool.js');
const bodyParser=require('body-parser');
const { join } = require('path');
const { urlencoded } = require('body-parser');



const server=express();
server.use(cors({
  origin:['http://localhost:8080']
}));

server.use(bodyParser.urlencoded({
  extended:false
}))

server.listen(3000);


server.get('/carousel',(req,res)=>{
  let sql='select cid,img,title,href from pro_index_carousel';
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  });
});




server.get('/articles',(req,res)=>{

  let cid=req.query.cid;
  let page=req.query.page;

  let pagesize=10;
  let start=(page-1)*pagesize;

  let sql='select id,description,subject,image from xzqa_article where category_id=? limit '+start+','+pagesize;

  pool.query(sql,[cid],(err,result)=>{
    if(err)throw err;
    let sql='select count(id) as num from xzqa_article where category_id=?';
    pool.query(sql,[cid],(err,results)=>{
      if(err) throw err;
      let count=results[0].num;
      let pagecount=Math.ceil(count/pagesize)
      res.send({message:'查询成功',code:1,result:result,pagecount:pagecount});
    });
  });
});


server.get('/getArticle',(req,res)=>{
  let id=req.query.id;
  let sql='select id,content,subject from xzqa_article where id=?'
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send(result[0]);
    //console.log(result);
  })
})





/* ************** */
// server.get('/categories01',(req,res)=>{
//   let sql='select id,category_name from xzqa_category';
//   pool.query(sql,(err,result)=>{
//     if(err) throw err;
//     res.send({message:'查询成功',code:1,result:result});
//   })
// })



// server.get('/articles01',(req,res)=>{
//   let cid=req.query.cid;
//   let page=req.query.page;
//   let count=10;
//   let start=(page-1)*count;
//   let sql='select id,description,subject,image from xzqa_article where category_id=? limit '+start+','+count;
//   pool.query(sql,[cid],(err,result)=>{
//     if(err) throw err;
//     res.send(result);
//   })
// })







// 登录
server.post('/login',(req,res)=>{
  let username=req.body.username;
  let password=req.body.password;
  let sql='select id,username from xzqa_author where username=? and password=MD5(?)';
  pool.query(sql,[username,password],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,message:'登录成功',username:username});
    }else{
      res.send({code:0,message:'登录失败'});
    }
  })
})
