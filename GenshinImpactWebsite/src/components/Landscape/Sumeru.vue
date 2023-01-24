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
        require("../../assets/Landscape/sumeru/化城郭.jpg"),
        require("../../assets/Landscape/sumeru/禅那园.jpg"),
        require("../../assets/Landscape/sumeru/喀万驿.jpg"),
        require("../../assets/Landscape/sumeru/奥摩斯港.jpg"),
        require("../../assets/Landscape/sumeru/须弥城.jpg"),
        require("../../assets/Landscape/sumeru/无郁稠林.jpg"),
      ],
      musicUrl: "https://music.163.com/song/media/outer/url?id=1992139167.mp3",
      picNow: {
        picName: "化城郭",
        picDescription:
          "林上的化城。「智慧的华城属于我们，无明的密林亦然。那宝树上缀满的，是失梦之国的余物。」",
      },
      picInfo: [
        {
          picName: "化城郭",
          picDescription:
            "林上的化城。「智慧的华城属于我们，无明的密林亦然。那宝树上缀满的，是失梦之国的余物。」",
        },
        {
          picName: "禅那园",
          picDescription:
            "沉思的花园。花园中播种着无数的花卉，每一朵都要比晶蝶更加绚丽。这是善思之人所蒙许的乐园。",
        },
        {
          picName: "喀万驿",
          picDescription:
            "高墙下的边驿。高大的坚壁抵御了热砂的风暴，也隔绝了知识的恩典。但神明的慧光不是本应普照所有人吗？",
        },
        {
          picName: "奥摩斯港",
          picDescription:
            "双树控扼的港湾。「贤者的说教何其枯燥，不如斟满花酿的美酒，踏上征服七海的航程。」",
        },
        {
          picName: "须弥城",
          picDescription:
            "地上一切智慧的渊薮。在繁枝茂叶的圣树之下，学城的贤者们已遍计所有知识。欢迎来到须弥，寻找答案的旅人。",
        },
        {
          picName: "无郁稠林",
          picDescription:
            "荧光闪烁的巨蕈之林。巨蘑的伞盖构筑幽光的天幕，遮日蔽月，似是谁人培育的乐土，亦或静待生机的园圃。",
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
