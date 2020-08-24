const express=require('express');
const fs=require('fs');
const multer=require('multer');
const uuid=require('uuid');
const pool=require('./pool');

const upload=multer({dest:'upload'});  //默认规则



const server=express();
server.listen(3000);

server.use(express.static('public'))


server.get('/single',(req,res)=>{
    let data=fs.readFileSync('./single.html',{encoding:'utf8'})
    
    res.send(data);
    
})

server.post('/single',upload.single('avatar'),(req,res)=>{
    res.send('上传成功');
    console.log(req.file);
})




server.get('/multiple',(req,res)=>{
    let data=fs.readFileSync('./multiple.html',{encoding:'utf8'})
    res.send(data);
})

server.post('/multiple',upload.array('avatar'),(req,res)=>{
    res.send('上传成功');
})




//自定义的规则     multer中有deskstroage属性
var storage=multer.diskStorage({
    filename:(req,file,cb)=>{     //设置文件存储的路径
        let origin=file.originalname;
        let extension=origin.slice(origin.lastIndexOf('.')).toLowerCase();
        //let mainname=Math.ceil(Math.random()*9999);
        let newname=uuid.v4()+extension;
        cb(null,newname);
    },
    destination:(req,file,cb)=>{
        let now=new Date();
        let year=now.getFullYear();
        let month=now.getMonth()+1;
        let day=now.getDate();
        month=month<10 ? '0' +month : month;
        day=day<10 ? '0' +day : day;
        let path= 'upload1/'+year+'-'+month+'-'+day;
        if(!fs.existsSync(path)){
            fs.mkdirSync(path,(err)=>{
                if(err) throw err;
            })
        }
        cb(null,path);
    },
});

const upload1=multer({storage:storage});   //自定义的上传规则

server.get('/custom',(req,res)=>{
    let data=fs.readFileSync('./custom.html',{encoding:'utf8'})
    res.send(data);
})

server.post('/custom',upload1.array('avatar'),(req,res)=>{
    res.send('上传成功');
})








server.get('/drag',(req,res)=>{
    let data=fs.readFileSync('./drag.html',{encoding:'utf8'})
    res.send(data);
})
server.post('/drag',upload1.array('aaa'),(req,res)=>{
    let files=req.files;
    let sql='insert into images(imageurl) values(?)'
    if(files.length){
        for(let i=0;i<files.length;i++){
            let file=files[i];
            pool.query(sql,[file.destination.substr(7)+'/'+file.filename],(err,result)=>{
                if(err) throw err;

            })
        }
    }
    res.send('上传成功');
})