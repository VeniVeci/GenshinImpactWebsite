<template>
  <div>
    <el-carousel
      ref="img"
      :interval="2000"
      type="card"
      height="400px"
      @change="carouselChange"
    >
      <el-carousel-item v-for="item in pics" :key="item">
        <el-image :src="item"></el-image>
        <audio :src="musicUrl" autoplay="autoplay"></audio>
      </el-carousel-item>
    </el-carousel>

    <!-- <el-button type="primary" @click="nextImg">nextImg</el-button> -->
  </div>
</template>

<script>
export default {
  name: "CarouselChart",
  data() {
    return {
      pics: ["1.png", "2.png", "3.png", "4.png"],
      music: ["1.mp3", "2.mp3", "3.mp3", "4.mp3"],
      musicUrl: "1.mp3",
    };
  },
  methods: {
    carouselChange(now, prev) {
      console.log(prev + "--->" + now);
      this.musicUrl = now + 1 + ".mp3";
      var audio = document.querySelector("audio");
      audio.play();
    },
    nextImg() {
      this.$refs.img.next();
    },
    prevImg() {
      this.$refs.img.prev();
    },
  },
};
</script>

<style>
.el-carousel {
  margin-top: 100px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  /* line-height: 200px; */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #99a9bf;
}

.music {
  margin-top: 30px;
}
</style>
