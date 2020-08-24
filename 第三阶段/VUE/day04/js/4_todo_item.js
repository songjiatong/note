var todoItem={
  props:["tasks","task","i"],
  template:`<li>{{i+1}} {{task}}<a href="javascript:;" @click="del">×</a></li>`,
  methods:{
    del(){
      this.tasks.splice(this.i,1);
    }
  }
}