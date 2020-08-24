<template>
  <div>
    <mt-header title='个人中心'>
    <router-link slot='left' to='/'>
      <mt-button icon='back'></mt-button>
    </router-link>
    </mt-header>
    <mt-cell title='个人资料' isLink to='/profile'>
      <img src="../assets/images/me.png" alt="" slot='icon'>
    </mt-cell>
    <mt-cell title='个人文章' isLink to='/'>
      <img src="../assets/images/article.png" alt="" slot='icon'>
    </mt-cell>
  </div>
</template>>