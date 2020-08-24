//定义全局组件，页面的页头部分
Vue.component("my-header",{
  template:`<header>
  <h1 style="color:pink">这是页头内容</h1>
  <ul>
    <li><router-link to="/">去首页</router-link></li>
    <li><router-link to="/details">去详情页</router-link></li>
  </ul>
  <hr>
  </header>`
})