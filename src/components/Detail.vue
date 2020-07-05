<template>
    <div>
        用户详情页
        <br>
        <span>参数id：{{$route.params.id}}</span>
        <br>
        <router-link to="/home">首页</router-link>
        <router-link to="/user">用户页</router-link>
    </div>
</template>

<script>
    export default {
        name: "Detail",
    }
</script>

<style scoped>

</style>
