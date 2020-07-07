import Vue from "vue";
import Router from "vue-router";
import Welcome from "../components/Welcome.vue";
import Login from "../components/Login.vue";
import Products from "../components/Products.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "welcome", component: Welcome },
    { path: "/login", name: "login", component: Login },
    { path: "/products", name: "products", component: Products },
  ],
});
