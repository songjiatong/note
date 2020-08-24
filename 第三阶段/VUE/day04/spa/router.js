var router=new VueRouter({
  routes:[
    {path:"/",component:index},  //prop为true表示可将将来地址栏中的参数值，自动传入给props中的同名变量
    {path:"/details/:lid",component:details,props:true},
    {path:"*",component:notFound}  //必须放在所有路径之后，*匹配所有处以上路径之外的所路径
  ]
})