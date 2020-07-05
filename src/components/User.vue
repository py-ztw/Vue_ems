<template>
    <div>
        <h3>用户列表</h3>
        <table border="2">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>生日</td>
                <td>个人信息</td>
                <td>操作</td>
            </tr>
            <tr v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.birthday}}</td>
                <td>{{user.content}}</td>
                <td>
                    <router-link :to="`/detail/${user.id}`">用户详情</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "User",
        data: function () {
            return {
                users: [
                    {id: 1, username: "百知教育", birthday: "2012-9-12", content: "自我介绍"},
                    {id: 2, username: "小黑", birthday: "2020-12-12", content: "自我介绍"},
                    {id: 3, username: "小白", birthday: "202-1-12", content: "自我介绍"},
                ]
            }
        },

    }
</script>

<style scoped>

</style>
