// webpack打包核心配置文件
module.exports={
    //0.设置打包模式
    //1.打包入口文件
    entry:'./src/js/index.js',
    //2.打包结果的输出文件
    output:{
        filename:'app.js',
        path:__dirname+'build'
    },
    //3.指定各种不同类型的加载器
    //4.指定使用各种插件
}