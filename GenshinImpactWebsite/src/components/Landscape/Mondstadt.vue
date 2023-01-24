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

    <!-- <h2>{{ picInfo[picIdx].picName }}</h2>
    <p>{{ picInfo[picIdx].picDescription }}</p> -->
    <h2>{{ picNow.picName }}</h2>
    <p>{{ picNow.picDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "CarouselChart",
  data() {
    return {
      pics: [
        require("../../assets/Landscape/mondstadt/果酒湖.jpg"),
        require("../../assets/Landscape/mondstadt/鹰翔海滩.jpg"),
        require("../../assets/Landscape/mondstadt/誓言岬.jpg"),
        require("../../assets/Landscape/mondstadt/晨曦酒庄.jpg"),
        require("../../assets/Landscape/mondstadt/清泉镇.jpg"),
        require("../../assets/Landscape/mondstadt/千风神殿.jpg"),
        require("../../assets/Landscape/mondstadt/雨后的蒙德.jpg"),
        require("../../assets/Landscape/mondstadt/摘星崖.jpg"),
      ],
      musicUrl: "https://music.163.com/song/media/outer/url?id=1973622666.mp3",
      picNow: {
        picName: "果酒湖",
        picDescription:
          "环绕蒙德城的天然淡水湖泊。宽广的湖面和粼粼的波光历经千百年不变，水澈见底，入口清冽甘甜。正是这样的水源成就了蒙德美酒的盛名，也让果酒湖成为了蒙德的重要标志之一。",
      },
      picInfo: [
        {
          picName: "果酒湖",
          picDescription:
            "环绕蒙德城的天然淡水湖泊。宽广的湖面和粼粼的波光历经千百年不变，水澈见底，入口清冽甘甜。正是这样的水源成就了蒙德美酒的盛名，也让果酒湖成为了蒙德的重要标志之一。",
        },
        {
          picName: "鹰翔海滩",
          picDescription:
            "从风起地往东延伸至海边，鹰翔海滩与誓言岬共同围成三面环海的陆地，环绕着蒙德东面的海湾。鉴于海岸线较长且地处浅海位置，经常有蒙德市民前来游玩。偶尔可见苍鹰翱翔于碧浪白沙之上。",
        },
        {
          picName: "誓言岬",
          picDescription:
            "位于蒙德城东南角、风啸山坡边缘的海岬。传说曾有一对恋人在此许下誓言，并留下一个感人至深的故事。至今此地仍被认为是恋人的好去处。除了观看海上日出日落外，由于地势的落差，在这里也可以轻松望到海湾对面的风起地。",
        },
        {
          picName: "晨曦酒庄",
          picDescription:
            "位于蒙德城西南方的晨曦酒庄，代代传承着蒙德传统的酿酒工艺。这里种植着大面积的葡萄等作物，用它们酿造出的各类酒品风靡整个提瓦特大陆。每年晨曦酒庄产出的酒品，部分运往蒙德城内销售，另一部分则通过城南的商道销往各地。",
        },
        {
          picName: "清泉镇",
          picDescription:
            "蒙德地区南部的悠闲小镇，与蒙德主城隔湖相望。此地居民多以打猎为生，常年为蒙德城内的各大餐馆提供优质鲜肉。清泉镇以其小镇情调和乡间野趣，吸引着前来观光的游客。如果在旅途中有幸遇到某位擅长肉类料理的大厨，或许还能体验到一段别样的惊喜。",
        },
        {
          picName: "千风神殿",
          picDescription:
            "地处蒙德东北部的神殿遗址群。据人们传言，千百年前这里曾是供奉古代风神的神庙，如今被漫长的时光侵蚀，只剩残存的建筑废墟。一些石质立柱上还依稀可辨认出曾经华丽雕刻的精妙曲线。所纪念的象征早已被遗忘的石雕上雕刻着一句古老的格言，「风带来故事的种子，时间使之发芽。」",
        },
        {
          picName: "雨后的蒙德",
          picDescription: "摄于摘星崖",
        },
        {
          picName: "摘星崖",
          picDescription: "摄于星落湖",
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
      var len = this.pics.length;

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
