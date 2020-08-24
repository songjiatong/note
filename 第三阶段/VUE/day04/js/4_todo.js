Vue.component("todo",{
  template:`<div>
  <h1>待办事项列表</h1>
  <todo-add :tasks="tasks"></todo-add>
  <todo-list :tasks="tasks"></todo-list>   
  </div>`,  //:变量名="数组名"
  components:{
    todoAdd,
    todoList
  },
  data(){
    return{
       tasks:["吃饭","睡觉","打豆豆"]
    }
  }
})