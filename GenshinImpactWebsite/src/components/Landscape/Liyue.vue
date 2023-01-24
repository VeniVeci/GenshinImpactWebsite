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
        require("../../assets/Landscape/liyue/港口.jpg"),
        require("../../assets/Landscape/liyue/天衡山.jpg"),
        require("../../assets/Landscape/liyue/荻花洲.jpg"),
        require("../../assets/Landscape/liyue/望舒客栈.jpg"),
        require("../../assets/Landscape/liyue/轻策庄.jpg"),
        require("../../assets/Landscape/liyue/绝云间.jpg"),
      ],
      musicUrl: "https://music.163.com/song/media/outer/url?id=1485874478.mp3",
      picNow: {
        picName: "港口",
        picDescription:
          "港口的建立为璃月的海上贸易打下了最初的基础。作为提瓦特大陆上最大的集贸港口，其货物吞吐量也绝非一般港口可比拟。每年海灯节时，在港口处可以看到海上万千宵灯飞入夜幕，是到访璃月不可错过的奇景。",
      },
      picInfo: [
        {
          picName: "港口",
          picDescription:
            "港口的建立为璃月的海上贸易打下了最初的基础。作为提瓦特大陆上最大的集贸港口，其货物吞吐量也绝非一般港口可比拟。每年海灯节时，在港口处可以看到海上万千宵灯飞入夜幕，是到访璃月不可错过的奇景。",
        },
        {
          picName: "天衡山",
          picDescription:
            "璃月港西边的山脉，也是抵御外敌的一道天然保护屏障。有记载以来，作为璃月的壁垒经历了数不清的大小战争，因此也可以看到不少古城墙、堡垒和防御工事的遗迹。传说中璃月人最早的采矿作业亦在此处进行。",
        },
        {
          picName: "荻花洲",
          picDescription:
            "荻花洲得名于浅滩中大面积生长的荻花，是璃月北部的一处天然浅滩湿地。水泽遍布、河网交错纵横，由多样的动植物群落组成了丰富的生态系统，也构成了来往旅客眼中绝佳的景观。",
        },
        {
          picName: "望舒客栈",
          picDescription:
            "来歇息的大多是途径此处的商贩，客栈也因此提供了直接贸易和摆摊的场所。高层位置视野极佳，天气晴朗时可以直接看到远处的轻策山和绝云间。坊间有传说道，在高耸的客栈中，传承着某种神秘的使命。",
        },
        {
          picName: "轻策庄",
          picDescription:
            "坐落于璃月最北部，隐藏在山丘与竹林间的村落。白云缭绕的山谷间点缀着鳞次栉比的半月形梯田，山风吹拂时可以看见一层层多彩的波浪。在这个宛如世外桃源的地方，轻策庄的村民过着质朴而又充实的生活。",
        },
        {
          picName: "绝云间",
          picDescription:
            "璃月西北部常年云雾缭绕、渺无人烟的峻岭。山间有奇景，但由于地势复杂、山路陡峭而鲜有人迹，传闻中是守护璃月的仙人们的隐居之处。也因此受到部分求仙祈福之人的追捧。",
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
