<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div class="register">
        <div class=" mt-4">
          <div class="d-flex">
            <img src="img/logo.png" />
            <h3 class="font-weight-bold ml-3 mt-2">欢迎注册</h3>
          </div>
          <input type="text" placeholder="请输入用户名" class="form-control mt-5 mb-2 w-100" @focus="msgUname" @blur="checkUname" v-model="unameVal"/>
          <span id="uname" class="text_small"></span>
          <input type="text" placeholder="请输入密码" class="form-control my-2" @focus="msgUpwd"  @blur="checkUpwd" v-model="upwdVal"/>
          <span id="upwd" class="text_small"></span>
          <input type="text" placeholder="请再次输入密码" class="form-control my-2" @focus="msgCpwd"  @blur="checkCpwd" v-model="cpwdVal"/>
          <span id="cpwd" class="text_small"></span>
          <input type="email" placeholder="请输入邮箱" class="form-control my-2" @focus="msgEmail"  @blur="checkEmail" v-model="emailVal"/>
          <span id="email" class="text_small"></span>
          <input type="number" placeholder="请输入手机号码" class="form-control my-2" @focus="msgPhone"  @blur="checkPhone" v-model="phoneVal"/>
          <span id="phone" class="text_small"></span>
          <input type="text" placeholder="请输入验证码" class="form-control my-2"/>
          <a href="#" class="btn btn-danger btn-block" @click="register">立即注册</a>
          <p>
            <span>已有账号?</span>
            <router-link to='/login'>去登陆>></router-link>
          </p>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
   data(){
    return {
      unameVal:'',
      upwdVal:'',
      cpwdVal:'',
      emailVal:'',
      phoneVal:''
    }
  },

   methods:{
    msgUname(){
      let unameEle=document.getElementById('uname');
      unameEle.innerHTML='6-12位的数字、字母和下划线的任意组合';
    },
    msgUpwd(){
      let unameEle=document.getElementById('upwd');
      unameEle.innerHTML='6-16位的数字、字母和下划线的任意组合';
    },
    msgCpwd(){
      let unameEle=document.getElementById('cpwd');
      unameEle.innerHTML='6-16位的数字、字母和下划线的任意组合';
    },
    msgEmail(){
      let unameEle=document.getElementById('email');
      unameEle.innerHTML='带有@和后缀名的邮箱';
    },
    msgPhone(){
      let unameEle=document.getElementById('phone');
      unameEle.innerHTML='11位的手机号码';
    },

    checkUname(){
      let unameEle=document.getElementById('uname');
      let unameRegExp=/^[a-zA-Z0-9_]{6,12}$/;
      if(unameRegExp.test(this.unameVal)){
        unameEle.setAttribute("class","success");
        unameEle.innerHTML='验证通过'
        return true
      }else{
        unameEle.setAttribute("class","err");
        unameEle.innerHTML='请重新输入'
        return false
      }
    },
   
    checkUpwd(){
      let upwdEle=document.getElementById('upwd');
      let upwdRegExp=/^[a-zA-Z0-9_]{6,16}$/;
      if(upwdRegExp.test(this.upwdVal)){
        upwdEle.setAttribute("class","success");
        upwdEle.innerHTML='验证通过'
        return true
      }else{
        upwdEle.setAttribute("class","err");
        upwdEle.innerHTML='请重新输入'
        return false
      }
    },
    checkCpwd(){
      let cpwdEle=document.getElementById('cpwd');
      if(this.cpwdVal==this.upwdVal && this.cpwdVal){
        cpwdEle.setAttribute("class","success");
        cpwdEle.innerHTML='验证通过'
        return true
      }else{
        cpwdEle.setAttribute("class","err");
        cpwdEle.innerHTML='密码不一致 请重新输入'
        return false
      }
    },
     checkEmail(){
       let emailEle=document.getElementById('email');
      let emailRegExp=/^\w+@\w+\.\w+(\.cn)?$/;
      if(emailRegExp.test(this.emailVal)){
        emailEle.setAttribute("class","success");
        emailEle.innerHTML='验证通过'
        return true
      }else{
        emailEle.setAttribute("class","err");
        emailEle.innerHTML='请重新输入'
        return false
      }
    },
     checkPhone(){
       let phoneEle=document.getElementById('phone');
      let phoneRegExp=/^1[3456789]\d{9}$/;
      if(phoneRegExp.test(this.phoneVal)){
        phoneEle.setAttribute("class","success");
        phoneEle.innerHTML='验证通过'
        return true
      }else{
        phoneEle.setAttribute("class","err");
        phoneEle.innerHTML='请重新输入'
        return false
      }
    },
    register(){
      if(this.checkUname() && this.checkEmail() && this.checkUpwd() && this.checkCpwd() && this.checkPhone()){
          this.axios.post('/users/register','uname='+this.unameVal+'&upwd='+this.upwdVal+'&email='+this.emailVal+'&phone='+this.phoneVal).then(result=>{
            if(result.data.code==1){
              alert('注册成功');
              this.$router.push('/login');
            }else{
              alert('该用户已注册，请重新输入');
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.register {
  background-image: url("/img/background.jpg");
  padding: 20px;
  margin-top: 50px;
}
.register > div {
  width: 300px;
  height: 600px;
  background: transparent;
  border: 0;
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