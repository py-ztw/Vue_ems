import Vue from 'vue'
// 导入 vueRouter  重命名成了Router
import Router from 'vue-router'
import Home from "../components/Home";
import login from "../components/login";
import User from "../components/User";
import Detail from "../components/Detail";
import register from "../components/register";
import AddEmp from "../components/AddEmp";
import DelEmp from "../components/DelEmp";
import UpdateEmp from "../components/UpdateEmp";

// 将路由交给Vue实例  可以再应用中使用vue的路由了
Vue.use(Router);

export default new Router({
    // 路由关系映射配置
    routes: [
        {path: '/', component: login,},
        {path: '/login', component: login,},
        {path: '/register', component: register,},
        {path: '/home', component: Home,},
        {path: "/user", component: User},
        {path: "/addemp", component: AddEmp},
        {path: "/delemp", component: DelEmp},
        {path: "/update", component: UpdateEmp},
        {path: "/detail/:id", component: Detail},
        {path: "/update/:id", component: UpdateEmp},

    ]
})
