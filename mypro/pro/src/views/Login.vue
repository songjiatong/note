<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div class="logo">
        <div class="d-flex">
          <img src="img/logo.png" />
          <h3 class="font-weight-bold ml-3 mt-2">欢迎登录</h3>
        </div>
        <div class="p-4 loginBg card">
          <div>
            <span class="font-weight-bold h4">登录</span>
            <router-link to="./register">
              <span class="font-weight-bold offset-7 text-danger">新用户注册</span>
            </router-link>
          </div>
          <p class="p-0 my-3">用户名:</p>
          <input type="text" class="p-2 form-control" placeholder="请输入用户名" v-model="nameVal" @blur="checkUname" />
          <span id="uname" class="text_small"></span>
          <p class="p-0 my-3">密码:</p>
          <input type="password" id="upwd" class="p-2 form-control"  placeholder="请输入密码" v-model="pwdVal" @blur="checkUpwd" />
          <img src="img/x_pwdlook.png" alt="" class="pwdlook">
          <span id="pwd" class="text_small"></span>
          <div class="my-3">
            <label for="cpwd">
              <input type="checkbox" id="cpwd" />自动登录
            </label>
            <a href="#" class="offset-6 text-danger">忘记密码?</a>
            <a href="#" class="btn btn-danger btn-block mt-5" @click="login">登录</a>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nameVal:'',
      pwdVal:''
    }
  },
  mounted(){
    let pwd=document.getElementById('upwd');
    var pwdislook=pwd.nextElementSibling;
		pwdislook.onclick=function(){
		  if(pwd.type=="password"){
		  	pwd.type="text";
			}else if(pwd.type==="text"){
				pwd.type="password";
			}
		}
  },
  methods:{
    checkUname(){
      let unameEle=document.getElementById('uname');
      let RegExpUname=/^[a-zA-Z0-9_]{6,12}$/;
      if(RegExpUname.test(this.nameVal)){
        unameEle.innerHTML='验证通过';
        unameEle.setAttribute("class","success");
        return true;
      }else{
        unameEle.innerHTML='请输入正确的用户名';
        unameEle.setAttribute("class","err");
        return false
      }
    },

     checkUpwd(){
      let pwdEle=document.getElementById('pwd');
      let RegExpUname=/^[a-zA-Z0-9_]{6,16}$/;
      if(RegExpUname.test(this.pwdVal)){
        pwdEle.innerHTML="验证通过";
        pwdEle.setAttribute("class","success");
        return true
      }else{
        pwdEle.innerHTML="请输入正确的密码";
        pwdEle.setAttribute("class","err");
        return false
      }
    },

    login(){
      if(this.checkUname() && this.checkUpwd()){
        this.axios.get('/users/login?uname='+this.nameVal+'&upwd='+this.pwdVal).then(result=>{
          if(result.data.code==1){
            alert('登陆成功');
            sessionStorage.setItem('username',this.nameVal);
            sessionStorage.setItem('isLogined',true)
            this.$store.commit('login_state');
            this.$router.push('/');
          }else{
            alert('用户名或密码输入错误');
          }
        })
      }
    }

  }
};
</script>

<style scoped>
.pwdlook{
  width:16px;
  height:10px;
  margin-top:-23px;
  margin-left:323px;
  margin-bottom:13px;
}
.logo {
  background-image: url("/img/background.jpg");
  height: 700px;
  position: relative;
  margin-top: 20px;
}
.logo > div {
  position: absolute;
  top: 50px;
  left: 50px;
}
.loginBg {
  background-color: rgba(89, 97, 104, 0.15);
  width: 400px;
  height: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 150px;
  margin-left: 200px;
}
.success{
  color:green;
  font-size: 10px;
}
.err{
  color: #f00;
  font-size: 10px;
}
</style>