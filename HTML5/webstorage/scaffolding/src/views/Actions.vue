<template>
    <div>
        <button @click="handler">获取服务器数据</button>
        <p>{{$store.state.username}}</p>
    </div>
</template>



<script>
export default {
    methods:{
        handler(){
            this.$store.dispatch('get_server_data_action')
        }
    }
}
</script>
