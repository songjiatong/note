<template>
    <div>
        <h1>访问数据---页面1</h1>
        <p>姓名：{{this.$store.state.username}}</p>
        <p>性别：{{this.$store.state.sex ? '男' : '女'}}</p>
        <p>年龄：{{this.$store.state.age}}</p>
        <p v-for="(friend,index) of $store.state.friends" :key="index">
            姓名：{{friend.username}} || 性别：{{friend.sex ? '男' : '女'}} || 地址：{{friend.addr}}
        </p>
    </div>
</template>