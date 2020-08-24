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
      <mt-field type="password" placeholder="请输入密码" label="密码:" :state="stateUpwd"  @blur.native.capture="checkUpwd" v-model="upwd"></mt-field>
      <mt-button @click="login" size="large" type="primary">登录</mt-button>
    </div>
  </div>
</template>




<script>
export default {
  data(){
    return {
      uname:'',
      upwd:'',
      stateUname:'',
      stateUpwd:''
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
    login(){
      if(this.checkUname() && this.checkUpwd()){
          //console.log('可以登录');
          this.axios.post('/login','username='+this.uname+'&password='+this.upwd).then(res=>{
            if(res.code==0){
              this.$messagebox('登陆失败')
            }else{
              sessionStorage.setItem('username',res.data.username);
              sessionStorage.setItem('isLogined',true)
              this.$store.commit('login_state');
              this.$router.push('/');
            }
          })
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