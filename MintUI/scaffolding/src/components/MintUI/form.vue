<template>
  <div>
    <mt-checklist title='爱好' :options="['运动','玩游戏']" v-model='value'> </mt-checklist>
    <p>{{value}}</p>
    <mt-checklist 
    title='技术' 
    :options="[
      {
        label:'HTML5',
        value:1
      },
      {
        label:'CSS',
        value:2
      },
      {
        label:'JS',
        value:3
      },
       {
        label:'TS',
        value:4
      }
    ]" 
    v-model='lists'></mt-checklist>
    <p>{{lists}}</p>
    <mt-radio title='性别' :options="['男','女','保密']" v-model='sex'></mt-radio>
    <mt-radio title='学历' :options="[
      {
        label:'专科',
        value:'1'
      },
      {
        label:'本科',
        value:'2'
      },
      {
        label:'高职',
        value:'3'
      },
      {
        label:'硕士',
        value:'4'
      }
    ]" v-model='gender'></mt-radio>
    <p>{{gender}}</p>
    <mt-switch v-model='flyModel'>飞行模式</mt-switch>
  </div>
</template>


<script>
export default {
  data(){
    return {
      value:[],
      lists:[],
      sex:'',
      gender:'',
      flyModel:false
    }
  }
}
</script>>