//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
import "./assets/css/global.css";
//完整引入
//引入ElementUI组件库
import ElementUI from "element-ui";
//引入ElementUI全部样式
import "element-ui/lib/theme-chalk/index.css";

// 一个是 vue router 一个是自己配置的router
import VueRouter from "vue-router";
import router from "./router";
//关闭Vue的生产提示
Vue.config.productionTip = false;

//应用ElementUI
Vue.use(ElementUI);
Vue.use(VueRouter);
//创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});
