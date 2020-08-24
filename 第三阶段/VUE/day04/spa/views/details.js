//子组件
var details={
  props:["lid"],
  template:`<div>
    <my-header></my-header>
    <h1 style="color:lightGreen">这是详情页</h1>
    <h2>这是{{lid}}号商品的详情...</h2>
    <button @click="login">登录</button>
  </div>`,
  methods:{
    login(){
      alert(`登陆成功，即将返回首页`);
      this.$router.push("/");
    }
  }
}