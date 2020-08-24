<template>
  <div>
    <mt-header title="学前端，到学问" fixed>
      <router-link to="/" slot="left">
        <mt-button>
            <img src="../../assets/images/back.png">
        </mt-button>
      </router-link>
      <router-link to="/hellorworld" slot="right">
        <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <div class="top">
      <mt-button type="danger" size="large" icon="back"></mt-button>
      <mt-button type="default" size="large" icon="more" disabled></mt-button>
      <mt-button type="primary" size="large" plain>
      	<img src="../../assets/images/gost.png" alt="">
			</mt-button>
		  
			<mt-field type="text" label="标签文本" state="success" readonly value="只读"></mt-field>
      <mt-field type="textarea" label="标签文本" placeholder="请输入文本" state="warning" disableClear rows="4"></mt-field>
      <mt-field type="text" label="标签文本" placeholder="请输入文本" state="error" disabled :attr="{maxlength:6}"></mt-field>


      <mt-field type="text" label="标签文本" :placeholder="place" :state="stateUname" v-model="uname" @focus.native.capture="checkedUname" @blur.native.capture="checkUname"></mt-field>
      <mt-field type="password" label="标签文本" placeholder="请输入密码" :state="stateUpwd" :attr="{autocomplete:'off'}" v-model="upwd" @blur.native.capture="checkUpwd"></mt-field>
      <mt-field type="passrword" label="标签文本" placeholder="请确认密码" state="error" :attr="{autocomplete:'off'}" v-model="cpwd"></mt-field>
      <mt-button @click="login">登录</mt-button>
       
      <p v-for="(v,k) of 50" :key="k">第{{v}}个段落</p>
    </div>
  </div>
</template>


<style scoped>
.top {
  margin-top: 40px;
}
</style>



<script>
export default {
  data(){
    return {
      uname:'',
      upwd:'',
      cpwd:'',
      stateUname:'',
      stateUpwd:'',
      place:'请输入用户名'
    }
  },
  methods:{
    login(){
     
    },
    checkUname(){
      let unameRegExp=/^[a-zA-Z0-9_]{6,12}$/;
      if(unameRegExp.test(this.uname)){
        this.stateUname="success"
      }else{
        this.stateUname="error"
      }
    },
    checkUpwd(){
      let upwdRegExp=/^[a-zA-Z0-9_]{8,16}$/;
      if(upwdRegExp.test(this.upwd)){
        this.stateUpwd="success"
      }else{
        this.stateUpwd="error"
      }
    },
    checkedUname(){
      this.place="用户名长度为6-12位"
    }
  }
}
</script>




