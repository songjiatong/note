<template>
  <div>
  <mt-header title='个人资料'>
    <router-link to='/me' slot='left'>
      <mt-button icon='back'></mt-button>
    </router-link>
  </mt-header>
  <div class="content">
    <img src="../assets/images/header.png" alt="">
    <h4>昵称</h4>
  </div>
  </div>
</template>


<style scoped>
  .content{
    text-align: center;
    margin-top:60px;
  }
</style>