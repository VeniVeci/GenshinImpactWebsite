<template>
  <div>
    <el-carousel
      ref="img"
      :interval="7000"
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
      pics: [
        require("../../assets/persons/1.png"),
        require("../../assets/persons/2.png"),
        require("../../assets/persons/3.png"),
        require("../../assets/persons/4.png"),
      ],
      music: [
        require("../../assets/music/可莉语音.mp3"),
        "https://uploadstatic.mihoyo.com/ys-obc/2021/09/07/7531033/9fc8c7d2fd6fec2bfa3b9620d513d27e_5871022547932281728.mp3",
        require("../../assets/music/3.mp3"),

        "https://uploadstatic.mihoyo.com/ys-obc/2021/02/28/4359827/12195ac5b3e411bb9754b12ebbdc585b_1147430888770623121.mp3",
      ],
      // music: ["1.mp3", "2.mp3", "3.mp3", "4.mp3"],
      // musicUrl: "1.mp3",
      musicUrl: "可莉语音.mp3",
    };
  },
  methods: {
    carouselChange(now, prev) {
      console.log(prev + "--->" + now);
      this.musicUrl = this.music[now];
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
