// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (parmas) => {
 return parmas.a1+parmas.a2;
}