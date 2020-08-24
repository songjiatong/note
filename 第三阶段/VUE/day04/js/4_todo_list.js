var todoList={
  props:["tasks"],  //用来接收父级传过来的数据，tasks变量中保存着tasks数组中的数据，可以直接用
  template:`<ul>
  <todo-item v-for="(t,i) of tasks" :key="i" :task="t" :i="i" :tasks="tasks"></todo-item>
  </ul>`,
  components:{
    todoItem
  }
}