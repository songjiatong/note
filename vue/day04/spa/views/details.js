//所谓页面组件，其实就是子组件
var details={
  props:["lid"],// /details/5
  template:`<div>
    <my-header></my-header>
    <h1 style="color:green">这里详情页</h1>
    <h2>查看{{lid}}号商品的详细信息...</h2>
    <button @click="login">登录</button>
  </div>`,
  methods:{
    login(){
      alert("登录成功！即将返回首页！");
      this.$router.push("/");
    }
  }
}