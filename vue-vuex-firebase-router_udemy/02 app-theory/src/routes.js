import VueRouter from "vue-router";
import Home from "./pages/Home";
import Huizzas from "./pages/Huizzas";

export default new VueRouter({
  routes: [
    {
      path: "", // localhost:8080
      component: Home
    },
    {
      path: "/huizzas",
      component: Huizzas
    }
  ],
  mode: "history"
});
