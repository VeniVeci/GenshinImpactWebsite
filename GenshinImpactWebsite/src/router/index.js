// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import CarouselChart from "../components/Roles/CarouselChart";
import RelationGraph from "../components/Roles/RelationGraph";
import Mondstadt from "../components/Landscape/Mondstadt";
import Liyue from "../components/Landscape/Liyue";
import Inazuma from "../components/Landscape/Inazuma";
import Sumeru from "../components/Landscape/Sumeru";
import zhongli from "../components/Videos/zhongli";
import yuanmo from "../components/Videos/yuanmo";
import snpg from "../components/Videos/snpg";
import klee from "../components/Videos/klee";

import Main from "../components/Main";
//创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    // {
    //   path: "/",
    //   component: Main,
    // },
    {
      path: "/CarouselChart",
      component: CarouselChart,
    },
    {
      path: "/relationGraph",
      component: RelationGraph,
    },
    {
      path: "/mondstadt",
      component: Mondstadt,
    },
    {
      path: "/liyue",
      component: Liyue,
    },
    {
      path: "/inazuma",
      component: Inazuma,
    },
    {
      path: "/sumeru",
      component: Sumeru,
    },
    {
      path: "/zhongli",
      component: zhongli,
    },
    {
      path: "/yuanmo",
      component: yuanmo,
    },
    {
      path: "/snpg",
      component: snpg,
    },
    {
      path: "/klee",
      component: klee,
    },
  ],
});
export default router;
