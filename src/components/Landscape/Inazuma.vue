<template>
  <div>
    <el-carousel
      ref="img"
      :interval="5000"
      type="card"
      height="375px"
      @change="carouselChange"
    >
      <el-carousel-item v-for="item in pics" :key="item">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
    <audio :src="musicUrl" autoplay="autoplay" loop="loop"></audio>
    <h2>{{ picNow.picName }}</h2>
    <p>{{ picNow.picDescription }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pics: [
        require("../../assets/Landscape/inazuma/离岛.jpg"),
        require("../../assets/Landscape/inazuma/稻妻城.jpg"),
        require("../../assets/Landscape/inazuma/镇守之森.jpg"),
        require("../../assets/Landscape/inazuma/鸣神大社.jpg"),
        require("../../assets/Landscape/inazuma/神无冢·踏鞴砂.jpg"),
        require("../../assets/Landscape/inazuma/九条阵屋.jpg"),
      ],
      musicUrl: "https://music.163.com/song/media/outer/url?id=1973626814.mp3",
      picNow: {
        picName: "离岛",
        picDescription:
          "在锁国令期间，若想真正踏上鸣神的领土，就必须先通过离岛这道关卡。离岛由勘定奉行管辖，人们必须持有各类凭证才可出入此地，而这些凭证往往需要复杂的手续和一些特殊的关系才能办下。",
      },
      picInfo: [
        {
          picName: "离岛",
          picDescription:
            "在锁国令期间，若想真正踏上鸣神的领土，就必须先通过离岛这道关卡。离岛由勘定奉行管辖，人们必须持有各类凭证才可出入此地，而这些凭证往往需要复杂的手续和一些特殊的关系才能办下。",
        },
        {
          picName: "稻妻城",
          picDescription:
            "稻妻最为繁华热闹的城区，稻妻人大多居住生活在此。从花见坂到町街，可顺着地势一路向上，游览当地传统的老店，品尝稻妻特色的美食。天领奉行府也位于城中，管理民众治安与幕府军备等事务。在稻妻城至高之处，雷电将军高居天守，凌于众生之上。",
        },
        {
          picName: "镇守之森",
          picDescription:
            "位于影向山下，静谧幽玄的森林。随处可见的狸猫石像、隐于林间的错落鸟居、暗藏深处的遗落神龛…如同涓涓溪流，讲述着流淌在时光中的传说。",
        },
        {
          picName: "鸣神大社",
          picDescription:
            "稻妻最大的神社，位于影向山顶，供奉着御建鸣神主尊大御所大人。心怀愿望的人，可以一步步脚踏实地地登上山顶；或者若是被雷元素垂怜，还可乘雷极一路向上，直达被巨大的神樱树所笼罩的神社。神樱常开不败，一如鸣神永恒。",
        },
        {
          picName: "神无冢·踏鞴砂",
          picDescription:
            "传说中，「神无冢」意为「神不在的山丘」，直到现在也是幕府与珊瑚宫之间的争议之地。神无冢地势险峻，岩壁高悬。在层岩叠嶂之中，坐落着稻妻最大的冶炼设施「御影炉心」，稻妻锻刀铸剑的特殊材料玉钢即产于此地。",
        },
        {
          picName: "九条阵屋",
          picDescription:
            "幕府军营在神无冢的驻扎之处。信仰雷电将军的鸣神子民，与信仰海祇大御神的珊瑚宫，双方之间存在着永远无法化解的矛盾。而这一矛盾，因眼狩令的施行更加激化。",
        },
      ],
    };
  },
  mounted() {
    var audio = document.querySelector("audio");
    audio.play();
  },
  methods: {
    carouselChange(now, prev) {
      console.log(prev + "--->" + now);
      this.picNow = this.picInfo[now];
    },
  },
};
</script>

<style>
.el-carousel {
  margin-top: 100px;
}
.el-carousel__item {
  color: #f4f5f6;
  font-size: 14px;
  /* opacity: 0.75; */
  width: 700px;
}

.el-carousel__item:nth-child(n) {
  background-color: #e9edf1;
}

.el-image {
  text-align: center;
  padding-left: 30px;
  padding-top: 10px;
}
.music {
  margin-top: 30px;
}

h2 {
  text-align: center;
}

p {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 18px;
  padding-left: 180px;
  padding-right: 180px;
  line-height: 28px;
}
</style>
