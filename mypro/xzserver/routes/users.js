var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.get("/login",(req,res)=>{
  var {uname,upwd}=req.query;
  var sql="select * from bobo_user where uname=? and binary upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({message:'登陆成功',code:1});
    }else{
      res.send({message:'用户名或密码错误',code:0});
    }
  })
})

router.post("/register",(req,res)=>{
  var {uname,upwd,email,phone}=req.body;
  var sql='select * from bobo_user where uname=?';
  pool.query(sql,[uname],(err,result)=>{
    if (err) throw err;
    if(result.length>0){
      res.send({message:'该用户已注册',code:0});
    }else{
      var sql="insert into bobo_user(uname,upwd,email,phone) values(?,?,?,?)";
      pool.query(sql,[uname,upwd,email,phone],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.send({message:'注册成功',code:1});
        }
      })
    }
  })
})



// router.get("/islogin",(req,res)=>{
//   var uid=req.session.uid
//   if(uid==null){
//     res.write(JSON.stringify({ok:0}));
//     res.end();
//   }else{
//     var sql="select * from xz_user where uid=?";
//     pool.query(sql,[uid],(err,result)=>{
//       res.write(JSON.stringify({ok:1,uname:result[0].uname}));
//       res.end();
//     })
//   }
// })
// router.get("/signout",(req,res)=>{
//   delete req.session.uid;
//   res.send();
// })

module.exports=router;