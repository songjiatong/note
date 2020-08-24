<template>
  <div id="demo" class="carousel" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
      <!--1.轮播图片-->
    <div class="carousel-inner" :class="ulClass" :style="ulStyle">
      <div v-for="(carousel,i) of carousels" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="carousel.href" :title="carousel.title">
          <img :src="carousel.img" :style="{width:innerWidth+'px'}"/>
        </router-link> 
        <router-link :to="carousel.href" v-text="carousel.title"></router-link>
      </div>
      <!-- <div class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="carousels[0].href" :title="carousels[0].title">
          <img :src="carousels[0].img" :style="{width:innerWidth+'px'}"/>
        </router-link>
        <router-link :to="carousels[0].href" v-text="carousels[0].title"></router-link>
         
      </div> -->
    </div>
    <!--2.左右箭头-->
    <a href="javascript:;" @click="move(1)" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
    </a>
    <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <!--3.轮播指示符-->
    <ul class="carousel-indicators">
        <li v-for="(carousel,idx) of carousels" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      innerWidth:window.innerWidth*0.7,
      ulClass:{ hasTrans:true },
      i:0,
      carousels:[],
      canClick:true,
      timer:null
    }
  },
  // 获取数据
  mounted(){
  this.axios.get('/index').then(result=>{
    //console.log(result.data);
    this.carousels=result.data;
  })
  },

  created(){
     window.addEventListener("resize",()=>{
      if(window.innerWidth>576 && window.innerWidth<767){
        this.innerWidth=520
      }else if(window.innerWidth>=768 && window.innerWidth<991){
        this.innerWidth=700
      }else if(window.innerWidth>=992 && window.innerWidth<1200){
        this.innerWidth=940
      }else{
        this.innerWidth=1120
      }
    })
    this.start(); 
  },

  methods:{
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },3000)
    },
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){
          this.ulClass.hasTrans=false;
          setTimeout(()=>{
            this.i=this.carousels.length;
            setTimeout(()=>{
              this.ulClass.hasTrans=true;
              this.i+=i;
              setTimeout(()=>{
                this.canClick=true;
              },200)
            },50)
          },50)
        }else if(i==1&&this.i==this.carousels.length-1){
          this.i+=i;
          setTimeout(()=>{
            this.ulClass.hasTrans=false;
            setTimeout(()=>{
              this.i=0;
              setTimeout(()=>{
                this.ulClass.hasTrans=true;
                setTimeout(()=>{
                  this.canClick=true;
                })
              },50)
            },50)
          },200)
        }else{
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },300)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },300)
      }
    },
  
  },
  
  computed:{
    ulStyle(){
      var width=this.innerWidth*(this.carousels.length+1)+"px";
      var marginLeft=-this.i*this.innerWidth+"px";  
      return { width, marginLeft }
    }
  }
}
</script>
<style scoped>
/* section>#carousel>.carousel-inner>div>a{
    display:block;
  } */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

 .carousel{
    margin-top:60px;
    overflow:hidden;
  }
 .carousel:after{
    content:"";
    display:block;
    clear:both;
  }
 .carousel>.carousel-inner.hasTrans{
     transition:all .2s linear;
   }
.carousel>.carousel-inner>.carousel-item{
    display:block;
    float:left;
    position: relative;
  }
.carousel>.carousel-inner>.carousel-item>a:last-child{
    display:block;
    height:50px;
    color:#fff;
    text-align:center;
    font-size:25px;
    font-weight: bolder;
    line-height:50px;
    text-decoration:none;
    background-color:#f68cc6;
    opacity: .7;
    position:absolute;
    top:60%;
    left:10%;
    border-radius: 5px;
    padding:0px 15px;
    
  }
.carousel>.carousel-inner>.carousel-item:nth-child(2)>a:last-child{
    background-color:#fa9c77;
  }
.carousel>.carousel-inner>.carousel-item:nth-child(3)>a:last-child{
    background-color:#ba4b5d;
  }
.carousel>.carousel-inner>.carousel-item:nth-child(4)>a:last-child{
    background-color:#02c0f0f5;
  }
.carousel>.carousel-inner>.carousel-item:nth-child(5)>a:last-child{
    background-color:#bc76dd;
  }
.carousel>.carousel-inner>.carousel-item:nth-child(6)>a:last-child{
    background-color:#539788;
  }
.carousel>.carousel-inner>.carousel-item:nth-child(7)>a:last-child{
    background-color:#c67ee79b;
  }
.carousel>.carousel-inner>.carousel-item:nth-child(8)>a:last-child{
    background-color:#2f49079b;
  }

  /*重写指示符的样式*/
  .carousel-indicators{
    bottom:130px;
  }
  .carousel-indicators li{
    width:15px;height:15px;
    background-color:#fff;
    margin-left:6px;
    margin-right:6px;
    border-radius: 50%;
    top:120px;
  }
  .carousel-indicators>li:hover, .carousel-indicators>li.active{
    transform:scale(1.3)
  }
  .carousel-indicators>li:first-child{
    background-color:#f68cc6;
  }
  .carousel-indicators>li:nth-child(2){
    background-color:#fa9c77;
  }
  .carousel-indicators>li:nth-child(3){
    background-color:#ba4b5d;
  }
  .carousel-indicators>li:nth-child(4){
    background-color:#02c0f0f5;
  }
  .carousel-indicators>li:nth-child(5){
    background-color:#bc76dd;
  }
  .carousel-indicators>li:nth-child(6){
    background-color:#539788;
  }
  .carousel-indicators>li:nth-child(7){
    background-color:#c67ee79b;
  }
  .carousel-indicators>li:nth-child(8){
    background-color:#2f49079b;
  }
  /*重写左右箭头的样式*/
  .carousel-control-prev,
  .carousel-control-next{
    width:40px;height:100px;
    background-color:rgba(95, 95, 92, 0.3);
    top:35%;
    margin-left:40px;
    border-radius:0.25rem;
  }
  .carousel-control-next{
    margin-right:40px;
  }
</style>


