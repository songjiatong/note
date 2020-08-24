var router=new VueRouter({
  routes:[
    {path:"/",component:index},
    //希望进入详情页时，需要带一个商品编号参数lid
    //props:true,让地址栏中的参数值自动传给props中的变量
    {path:"/details/:lid",component:details,props:true},
    {path:"*",component:notFound}//一定要放在字典最后
  ]
})