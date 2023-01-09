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
  </div>
</template>

<script>
export default {
  name: "CarouselChart",
  data() {
    return {
      pics: [
        require("../../assets/Landscape/mondstadt/果酒湖.jpg"),
        require("../../assets/Landscape/mondstadt/晨曦酒庄.jpg"),
        require("../../assets/Landscape/mondstadt/千风神殿.jpg"),
        require("../../assets/Landscape/mondstadt/清泉镇.jpg"),
        require("../../assets/Landscape/mondstadt/誓言岬.jpg"),
        require("../../assets/Landscape/mondstadt/鹰翔海滩.jpg"),
      ],
      musicUrl: "https://music.163.com/song/media/outer/url?id=1973622666.mp3",
    };
  },
  mounted() {
    var audio = document.querySelector("audio");
    audio.play();
  },
  methods: {
    carouselChange(now, prev) {
      console.log(prev + "--->" + now);
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
</style>
