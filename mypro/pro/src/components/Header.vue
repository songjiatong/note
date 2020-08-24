<template>
  <div>
      <div class="container">
	<div class="row no-gutters mt-4">
		<div class="col-sm-12 col-md-2">
			<router-link to="/">
				<img src="img/logo.png">
			</router-link>
		</div>
		<div class="col-sm-12 col-md-5">
			<input class="form-control inp1 border-danger py-1" type="text" placeholder="搜索你想看的">
		</div>
		<div class="col-sm-12 col-md-2 pl-3" v-if="!$store.state.isLogin">
			<router-link class="btn text_small btn-danger py-1 px-2 my_btn1" to="/register">注册</router-link>
			<router-link class="btn text_small text-danger btn-outline-danger py-1 px-2 my_btn2" to="/login">登录</router-link>
		</div>
		<ul class="col-sm-12 col-md-2 pl-3 d-flex logout" v-else>
			<li class="font-weight-bold text_small">欢迎用户：</li>
			<li>{{$store.state.name}}
				<ul>
					<li>个人中心</li>
					<li>个人收藏</li>
					<li>购物车</li>
					<li @click="logout">注销</li>
				</ul>
			</li>
		</ul>
		<div class="col-sm-12 col-md-3">
			<ul class="p-0 my_login">
				<li class="text_small">
					<img src="img/icon_app.png">
					手机版
					<ul>
						<li><img src="img/app_qrcode.png" alt=""></li>
					</ul>
				</li>
				<li></li>
				<li class="text_small">了解我们
					<ul>
						<li class="text-muted">关于我们</li>
						<li class="text-muted">联系我们</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>
  </div>
</template>

<script>
export default {
	data(){
		return{

		}
	},
	methods:{
		logout(){
			this.$store.commit('logout_state');
		}
	}
}
</script>

<style scoped>
.logout{
	list-style: none;
	font-size: 12px;	
}
.logout>li:hover{
	cursor: pointer;
}
.logout>li:last-child{
	color:#f00;
}
.logout>li>ul{
	display: none;
	padding:0;
	margin-left:-8px;
}
.logout>li>ul>li{
	color:#fff;
}
.logout>li>ul>li:hover{
	color:#f00;
}
.logout>li>ul>li{
	padding:8px;
}
.logout>li:hover>ul{
	display: block;
	background-color: #faa;
	z-index: 999;
	border-radius: 3px;
	position: absolute;
}
.inp1{
background-image: url(/img/icon_search.png);
background-repeat: no-repeat;
background-position: 98% center;
}
.text_small{
font-size:12px;
}
.my_btn1:focus,.my_btn2:focus{
outline: 0;
box-shadow: 0 0 0 0 transparent;
}
.inp1:focus{
	outline: 0;
box-shadow: 0 0 0 0 transparent;
}
.my_btn1:hover{
background-color: #f00;
}
.my_btn2:hover{
background-color: transparent;
}
.breadcrumb-item+.breadcrumb-item::before{
	content:"|";
	font-size: 15px;
}
.my_login>li{
	position: relative;
	float:left;
	width:80px;
	padding-left:25px;
}
.my_login>li>ul{
	padding:5px;
	height:0px;
	overflow: hidden;
	opacity: 0;
	position: absolute;
	top:15px;
	left:-10px;
	transition:all .5s linear;
}
.my_login>li:last-child>ul>li{
	width:100px;
	height:30px;
	padding-top:5px;
	margin-left:30px;
	padding-left:4px;
	font-size: 14px;
}
.my_login>li:hover{ cursor:pointer;}
.my_login>li:first-child:hover>ul{
	height:140px;
	width:140px;
	opacity: 1;
	cursor:pointer;
	z-index: 999;
}
.my_login>li:last-child:hover>ul{
	width:100px;
	height:80px;
	opacity: 1;
	cursor:pointer;
}
.my_login>li:last-child>ul>li:hover{
	background-color: #f00;
	border:1px solid #fff;
	color:#fff !important;
}
</style>