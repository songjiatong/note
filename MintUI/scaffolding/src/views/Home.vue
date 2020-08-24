<template>
  <div>
    <mt-header title='学前端 到学问' fixed>
      <div slot='right' class="show" v-if="!$store.state.isLogin">
        <router-link to='/register'>免费注册</router-link>
        <router-link to='login'>登录</router-link>
      </div>
      <div slot="right" v-else>
          <span>欢迎</span>
          <span class="user">{{username}}</span>
          <mt-button @click="logout">
            <img src="../assets/images/logout.png" alt="" slot="icon">
          </mt-button>
      </div>
    </mt-header>

    <mt-navbar v-model='test' class="navbar">
      <mt-tab-item :id="categories.id" v-for="(categories,index) of categories" :key="index">{{categories.category_name}}</mt-tab-item>
    </mt-navbar>
    
    <mt-tab-container v-model='test' class="content" infinite-scroll-distance='10' v-infinite-scroll='loadMore' infinite-scroll-disabled='busy' infinite-scroll-immediate-check='true'>
      <mt-tab-container-item :id="categorie.id" v-for="(categorie,index) of categories" :key="index">
        <div class="info-item" v-for="(article,index) of articles" :key="index">
          <div class="info-item-head">
            <router-link :to="'/article/'+article.id">{{article.subject}}</router-link>
          </div>
          <div class="info-item-content">
            <div class="info-item-img" v-if="article.image!=null">
              <router-link :to="'/article/'+article.id"><img v-lazy="article.image"></router-link>
            </div>
            <div class="info-item-des">{{article.description}}</div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model='selectTab' fixed>
      <mt-tab-item id='home'>
        <img v-if="selectTab=='home'" src="../assets/images/home_enable.png" slot='icon'>
        <img v-else src="../assets/images/home_disable.png" slot='icon'>
      </mt-tab-item>
       <mt-tab-item id='me'>
        <img v-if="selectTab=='me'" src="../assets/images/me_enable.png" slot='icon'>
        <img v-else src="../assets/images/me_disable.png" slot='icon'>
      </mt-tab-item>
      <mt-tab-item id='cart'>
        <img v-if="selectTab=='cart'" src="../assets/images/cart_enable.png" slot='icon'>
        <img v-else src="../assets/images/cart_disable.png" slot='icon'>
      </mt-tab-item>
    </mt-tabbar>
    
  </div>
</template>

<style scoped>
 .show>a{
   text-decoration :none;
   color:#fff;
   padding:3px;
 }
 .content{
   margin-bottom:43px;
 }
 .navbar{
   margin-top:40px;
 }
 .info-item{
   border-bottom: .5px solid #d3d3d3;
   padding:10px;
 }
 .info-item-head>a{
   font-weight: bold;
   font-size: 17px;
   color:#1a1a1a;
   line-height: 22px;
   text-decoration: none;
 }
 .info-item-img>a>img{
   width:100px;
   height:60px;
   margin-right:15px;
   border-radius: 5px;
 }
 .info-item-content{
   display: flex;
   margin-top:5px;
 }
 .info-item-des{
   font-weight: 400;
   font-size: 17px;
   color:#444;
   line-height: 21px;
   height:63px;
   overflow: hidden;
 }
 .user{
   padding:5px;
   font-size:10px;
   color:#faa;
   margin-right:10px;
 }
</style>


<script>
export default {
  data(){
    return {
      test:1,
      selectTab:'home',
      categories:[],
      articles:[],
      page:1,
      busy:false,
      pagecount:0,
      username:sessionStorage.getItem('username')
    }
  },


  methods:{


     loadData(){
       this.$indicator.open('加载中...');
      this.busy=true;
       this.axios.get('/articles?cid='+this.test+'&page='+this.page).then(res=>{
          this.pagecount=res.data.pagecount;
          res.data.result.forEach(item => {
          if(item.image!=null){
            item.image=require('../assets/images/articles/'+item.image)
          }
            this.articles.push(item)
          });
          this.busy=false;
          this.$indicator.close();
        });
    },

    loadMore(){
      this.page++;
      if(this.page<this.pagecount){
         this.loadData(); 
      }
    },
    
    logout(){
      this.$store.commit('logout_state')
    }

   
  },


   watch:{
      test(){
        this.articles=[];
        this.page=1;
        this.loadData();
      },
    },

  mounted(){
    this.axios.get('/categories').then((res)=>{
      this.categories=res.data.result;
    });

    this.loadData();

    
  },    
}
</script>


