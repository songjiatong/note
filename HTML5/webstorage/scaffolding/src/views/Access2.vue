<template>
    <div>
        <h1>访问数据--页面2</h1>
        <p>姓名：{{$store.state.username}}</p>
        <p>性别：{{$store.state.sex ? '男' : '女'}}</p>
        <p>年龄：{{this.$store.state.age}}</p>
        <p v-for="(friend,index) of $store.state.friends" :key="index">
            姓名：{{friend.username}} || 性别：{{friend.sex ? '男' : '女'}} || 地址：{{friend.addr}}
        </p>
        
        <button @click='add()'>年龄增加</button>
        <button @click='reduce()'>年龄减少</button>
        <button @click="mutation()">年龄增加5</button>
    </div>
</template>



<script>
export default {
    methods:{
        add(){
           this.$store.commit('age_increment_mutation') 
        },
        reduce(){
            this.$store.commit('age_decrement_mutation') 
        },
        mutation(){
            this.$store.commit('age_add_mutation',5)
        }
    }
}
</script>

