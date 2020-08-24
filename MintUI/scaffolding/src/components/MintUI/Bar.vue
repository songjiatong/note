<template>
  <div>
  <mt-navbar v-model='active' fixed>
    <mt-tab-item id='a'>生活</mt-tab-item>
    <mt-tab-item id='b'>娱乐</mt-tab-item>
    <mt-tab-item id='c'>汽车</mt-tab-item>
    <mt-tab-item id='d'>游戏</mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model='active' class="navbar">
    <mt-tab-container-item id='a'>生活</mt-tab-container-item>
    <mt-tab-container-item id='b'>娱乐</mt-tab-container-item>
    <mt-tab-container-item id='c'>汽车</mt-tab-container-item>
    <mt-tab-container-item id='d'>游戏</mt-tab-container-item>
  </mt-tab-container>
  <mt-tabbar v-model="selectTab" fixed>
    <mt-tab-item id='home'>
      <img v-if="selectTab=='home'" src="../../assets/images/home_enable.png" slot='icon'>
      <img v-else src="../../assets/images/home_disable.png" slot='icon'>首页
    </mt-tab-item>
    <mt-tab-item id='me'>
      <img v-if="selectTab=='me'" src="../../assets/images/me_enable.png" slot='icon'>
      <img v-else src="../../assets/images/me_disable.png" slot='icon'>我的
    </mt-tab-item>
    <mt-tab-item id='cart'>
     <img v-if="selectTab=='cart'" src="../../assets/images/cart_enable.png" slot='icon'>
     <img v-else src="../../assets/images/cart_disable.png" slot='icon'>购物车
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>



<script>
export default {
 data(){
   return {
     active:'b',
     selectTab:'me'
   }
 }
}
</script>

<style scoped>
  .navbar{
    margin-top:46px;
  }
</style>

