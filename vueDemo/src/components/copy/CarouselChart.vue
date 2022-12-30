<template>
  <div>
    <el-button type="primary" @click="changePic">下一张</el-button>
    <br /><br /><br />
    <img id="pic" @click="changePic" :src="addr" />
  </div>
</template>

<script>
export default {
  name: "CarouselChart",
  data() {
    return {
      // addr: require("../assets/1.png"),
      addr: "1.png",
      idx: 1,
    };
  },
  methods: {
    changePic() {
      // var prefix = '../assets/';
      var prefix = "";

      var suffix = ".png";
      var tmp = (this.idx++ % 5) + 1;
      var path = prefix + tmp + suffix;
      this.addr = path;
      // console.log("改变前: " + this.addr)

      // this.addr = require(path);
      // console.log("改变后: " + this.addr)
    },
  },
};
</script>

<style>
img {
  width: 30%;
  height: auto;
}
</style>
