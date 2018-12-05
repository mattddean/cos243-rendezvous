import Vue from "vue";

Vue.config.productionTip = false;

import Vuetify from "vuetify";

Vue.use(Vuetify);
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import About from "./pages/About.vue";
import SignIn from "./pages/SignIn.vue"

import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {name: "about", path: "/about", component: About},
        {name: "sign-in", path: "/sign-in", component: SignIn}
    ]
});

import App from "./App.vue";

new Vue({
    el: "#app",
    data: {
		currentUser: null
    },
    router,
    render: h => h(App)
});
