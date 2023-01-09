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
        require("../../assets/Landscape/liyue/荻花洲.jpg"),
        require("../../assets/Landscape/liyue/港口.jpg"),
        require("../../assets/Landscape/liyue/绝云间.jpg"),
        require("../../assets/Landscape/liyue/轻策庄.jpg"),
        require("../../assets/Landscape/liyue/天衡山.jpg"),
        require("../../assets/Landscape/liyue/望舒客栈.jpg"),
      ],
      musicUrl: "https://music.163.com/song/media/outer/url?id=1485874478.mp3",
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
