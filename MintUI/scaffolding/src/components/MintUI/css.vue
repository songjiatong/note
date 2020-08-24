<template>
  <div>
    <mt-cell title='飞行模式' label='备注'>
      <img src="../../assets/images/fly.png" alt="" slot='icon'>
      <mt-switch v-model='flyModel'></mt-switch>
    </mt-cell>
    <mt-cell title='局域网' isLink to='/'>
      <img src="../../assets/images/wifi.png" alt="" slot='icon'>未连接

    </mt-cell>
  </div>
</template>



<script>
export default {
  data(){
    return {
      flyModel:true
    }
  }
}
</script>

