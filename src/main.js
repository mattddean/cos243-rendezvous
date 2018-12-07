import Vue from "vue";

Vue.config.productionTip = false;

import Vuetify from "vuetify";

Vue.use(Vuetify);
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import Home from "./pages/Home.vue";
import SignIn from "./pages/SignIn.vue";
import About from "./pages/About.vue";
import Members from "./pages/Members.vue";
import ResetPassword from "./pages/ResetPassword.vue"; // NEW 

import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {name: "home-page", path: "/", component: Home},
        {name: "sign-in", path: "/sign-in", component: SignIn},
        {name: "about-us", path: "/about-us", component: About},
        {name: "members", path: "/members", component: Members},		
		{name: "reset-password", path: "/reset-password", component: ResetPassword} // New route
    ]
});

import App from "./App.vue";

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
