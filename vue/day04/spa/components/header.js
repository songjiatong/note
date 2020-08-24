//如果多个页面共用的部分: 页头或页脚，应该创建为全局组件
Vue.component("my-header",{
  template:`<header>
    <h1 style="color:orange">这里是页头</h1>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/details">详情页</router-link></li>
    </ul>
    <hr>
  </header>`
})