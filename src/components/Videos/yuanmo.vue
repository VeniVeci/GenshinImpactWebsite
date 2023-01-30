<template>
  <div>
    <el-carousel :interval="3000" height="400px" @change="carouselChange">
      <el-carousel-item v-for="item in videos" :key="item">
        <div>
          <iframe
            :src="
              '//player.bilibili.com/player.html?' +
                item +
                '&page=1&high_quality=1'
            "
            scrolling="no"
            width="100%"
            height="700"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
            autoplay="autoplay"
          >
          </iframe>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: [
        "aid=771245746&bvid=BV1Mr4y1L7SD&cid=781054919",
        "aid=818895733&bvid=BV1xG4y1g7kS&cid=930134345",
      ],
    };
  },
  mounted() {
    // var audio = document.querySelector("audio");
    // audio.play();
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
