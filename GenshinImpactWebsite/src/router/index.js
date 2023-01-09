// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import CarouselChart from "../components/Roles/CarouselChart";
import RelationGraph from "../components/Roles/RelationGraph";
import Mondstadt from "../components/Landscape/Mondstadt";
import Liyue from "../components/Landscape/Liyue";
import zhongli from "../components/Videos/zhongli";
import yrzhong from "../components/Videos/yrzhong";
import snpg from "../components/Videos/snpg";

//创建并暴露一个路由器
const router = new VueRouter({
  routes: [
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
      path: "/zhongli",
      component: zhongli,
    },
    {
      path: "/yrzhong",
      component: yrzhong,
    },
    {
      path: "/snpg",
      component: snpg,
    },
  ],
});
export default router;
