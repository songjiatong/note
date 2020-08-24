<template>
  <div>
    <mt-header title="登录知乎" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/header" slot="right">
        <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-field type="text" placeholder="请输入用户名" label="用户名:" :state="stateUname" @blur.native.capture="checkUname" v-model="uname"></mt-field>
      <mt-field type="email" placeholder="请输入邮箱" label="邮箱:" :state="stateEmail" @blur.native.capture="checkEmail" v-model="email"></mt-field>
      <mt-field type="password" placeholder="请输入密码" label="密码:" :state="stateUpwd"  @blur.native.capture="checkUpwd" v-model="upwd"></mt-field>
      <mt-field type="password" placeholder="请确认密码" label="确认密码:" :state="stateCpwd"  @blur.native.capture="checkCpwd" v-model="cpwd"></mt-field>
      <mt-button @click="register" size="large" type="primary">注册</mt-button>
    </div>
  </div>
</template>




<script>
export default {
  data(){
    return {
      uname:'',
      email:'',
      cpwd:'',
      upwd:'',
      stateUname:'',
      stateEmail:'',
      stateUpwd:'',
      stateCpwd:''
    }
  },
  methods:{
    checkUname(){
      let unameRegExp=/^[a-zA-Z0-9_]{6,12}$/;
      // if(unameRegExp.test(this.uname)){
      //   this.stateUname="success"
      //   return true
      // }else{
      //   this.stateUname="error"
      //   return false
      // }
      // 也可以使用三目
      this.stateUname = unameRegExp.test(this.uname) ? 'success' : 'error';
      return unameRegExp.test(this.uname0);
    },
    checkEmail(){
      let emailRegExp=/^\w+@\w+\.\w+(\.cn)?$/;
      if(emailRegExp.test(this.email)){
        this.stateEmail="success"
        return true
      }else{
        this.stateEmail="error"
        return false
      }
    },
    checkUpwd(){
      let upwdRegExp=/^[a-zA-Z0-9_]{6,16}$/;
      if(upwdRegExp.test(this.upwd)){
        this.stateUpwd="success"
        return true
      }else{
        this.stateUpwd="error"
        return false
      }
    },
    checkCpwd(){
      if(this.cpwd==this.upwd && this.cpwd){
        this.stateCpwd="success"
        return true
      }else{
        this.stateCpwd="error"
        return false
      }
    },
    register(){
      if(this.checkUname() && this.checkEmail() && this.checkUpwd() && this.checkCpwd()){
          console.log('可以注册');
      }
    }
  }
}
</script>




<style scoped>
  .content{
    margin-top:40px;
  }
</style>