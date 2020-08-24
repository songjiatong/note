const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/detail",(req,res)=>{
  var lid=req.query.lid;
  var output={};
  var sql="SELECT * FROM `bobo_clothing` where family_id=?";
  query(sql,[lid])
  //open(result)->then(result=>{...})
  .then(result=>{
    output.product=result[0];
    var fid=output.product.family_id;
    var sql="SELECT brand,cid FROM `bobo_clothing` where family_id=?";
    //要想继续用then，必须返回Promise对象
    return query(sql,[fid])//return Promise
  })
  //open(result)->then(result=>{...})
  .then(result=>{
    output.specs=result;
    var sql="SELECT * FROM `bobo_clothing_pic` where cid_pid=?";
    return query(sql,[lid])
  })
  .then(result=>{
    output.pics=result;
    var sql="SELECT * FROM `bobo_clothing_inventory` where cid_id=?";
    return query(sql,[lid])
  })
  //open(result)->then(result=>{...})
  .then(result=>{
    output.colors=result;
    res.send(output);
  })
  //err(error)->catch(error=>{...})
  .catch(error=>console.log(error))
})
module.exports=router;
//http://localhost:3000/details?lid=3