var todoAdd={
  props:["tasks"],
  template:`<div>
  <input v-model="newTask"><button @click="add">+</button>
  </div>`,
  data(){
    return{
      newTask:"",
    }
  },
  methods:{
    add(){
      this.tasks.push(this.newTask);  //props中的属性名，和data中的变量用法几乎相同，都可以用js语句来写
      this.newTask=""   //添加后删除input的输入内容
    }
  }
}