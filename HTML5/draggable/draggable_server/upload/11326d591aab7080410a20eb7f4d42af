var todoAdd={
  props:["tasks"],
  template:`<div>
    <input v-model="newTask"><button @click="add">+</button>
  </div>`,
  data(){
    return {
      newTask:""
    }
  },
  methods:{
    add(){
      this.tasks.push(this.newTask);
      //添加完新任务后，清空文本框
      this.newTask="";//双向绑定
    }
  }
}