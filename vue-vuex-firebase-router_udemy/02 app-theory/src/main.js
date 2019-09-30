import Vue from "vue";
import App from "./App.vue";
import Directive from "./color.js";
import ListNames from "./ListNames.vue";
import VueRouter from "vue-router";
import router from "./routes";

export const eventEmitter = new Vue();

Vue.use(VueRouter);

Vue.directive("colored", Directive);

Vue.component("app-list", ListNames);

Vue.mixin({
  beforeUpdate() {
    console.log("before update");
  }
});

// Фильтр глобально
Vue.filter("slice", val => {
  return val.slice(0, 4);
});

new Vue({
  el: "#app",
  render: h => h(App),
  // render: function(h) {
  //   return h(App);
  // }

  router: router
});
