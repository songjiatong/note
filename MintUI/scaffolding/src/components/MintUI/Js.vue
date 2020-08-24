<template>
  <div>
  <!-- <mt-button type='primary' size='large'>轮播图</mt-button>
  <div class="swipe">
    <mt-swipe :auto="1000" :showIndicators='false' :speed='1000' :continuous='true'>
      <mt-swipe-item><img src="../../assets/images/01.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/images/02.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/images/03.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/images/04.png" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
  <mt-button type='primary' size='large'>lazy load 图像的懒加载</mt-button>
  <p v-for="(img,i) of images" :key="i">
    <img v-lazy='img' class="img">
  </p> -->
  <div infinite-scroll-distance='10' v-infinite-scroll='loadData' infinite-scroll-disabled='busy'>
    <mt-button type='primary' size='large'>滚动加载指令  infinite scroll</mt-button>
    <p v-for="(v,i) of num" :key="i">{{v}}</p>
  </div>
  
  </div>
</template>


<style scoped>
  .swipe{
    height:200px;
  }
  .swipe img{
    width:100%;
  }
  .img{
    display: block;
    width:100%;
  }
</style>



<script>
export default {
  data(){
    return {
      images:[require('../../assets/images/01.jpg'),require('../../assets/images/02.jpg'),require('../../assets/images/03.jpg'),require('../../assets/images/04.png'),require('../../assets/images/article.png'),require('../../assets/images/back.png'),require('../../assets/images/fly.png'),require('../../assets/images/wifi.png')],
      num:70,
      busy:false
    }
  },
   methods:{
      loadData(){
        this.$indicator.open({
          text:'加载中...',
          // spinnerType:'fading-circle'
          // spinnerType:'snake'
          // spinnerType:'fading-circle'
          // spinnerType:'double-bounce'
          spinnerType:'triple-bounce'
        })
        this.busy=true;
        window.setTimeout(()=>{
          this.num+=10;
          this.busy=false;
          this.$indicator.close();
        },2000)
      }
  }
}
</script>

