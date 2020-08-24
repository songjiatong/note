//所谓页面组件，其实就是子组件
var index={
  template:`<div>
    <my-header></my-header>
    <h1 style="color:blue">这里首页</h1>
    <ul>
      <li><router-link to="/details/5">查看5商品的详情</router-link></li>
      <li><router-link to="/details/8">查看8商品的详情</router-link></li>
    </ul>
  </div>`
}