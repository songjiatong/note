const express=require("express");
var router=express.Router();
var pool=require("../pool");

// 轮播图数据
router.get("/",(req,res)=>{
  var sql="SELECT cid,img,title,href FROM  bobo_index_carousel";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

// 首页商品数据
router.get("/product_index",(req,res)=>{
  var sql="SELECT pid,title,details,pic,price,href FROM  bobo_index_product";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);

  })
})

router.get("/product_index_girl",(req,res)=>{
  var sql="SELECT gid,details,pic,href FROM bobo_index_product_girl";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);

  })
})
module.exports=router;
