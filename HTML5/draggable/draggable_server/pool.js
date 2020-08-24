const mysql=require('mysql');
const pool=mysql.createPool({
    post:'3306',
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'multer',
    connectionlimit:10
});
module.exports=pool;