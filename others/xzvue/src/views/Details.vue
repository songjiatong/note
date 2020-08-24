<template>
  <div>
    <h1 style="color:blue">这里是详情页</h1>
    <h2>显示{{lid}}商品的详细信息...</h2>
  </div>
</template>
<script>//要想有提示必须<sc才能有提示
export default {
  props:["lid"]
}
</script>