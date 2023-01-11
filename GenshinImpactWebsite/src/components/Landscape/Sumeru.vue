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
  data() {
    return {
      pics: [
        require("../../assets/Landscape/sumeru/奥摩斯港.jpg"),
        require("../../assets/Landscape/sumeru/禅那园.jpg"),
        require("../../assets/Landscape/sumeru/化城郭.jpg"),
        require("../../assets/Landscape/sumeru/降诸魔山.jpg"),
        require("../../assets/Landscape/sumeru/喀万驿.jpg"),
        require("../../assets/Landscape/sumeru/无郁稠林.jpg"),
        require("../../assets/Landscape/sumeru/须弥城.jpg"),
      ],
      musicUrl: "https://music.163.com/song/media/outer/url?id=1992139167.mp3",
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
