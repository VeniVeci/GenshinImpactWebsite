<template>
  <el-carousel :interval="1000" height="600px" indicator-position="outside">
    <el-carousel-item v-for="item in imgs" :key="item">
      <el-image :src="item"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Mondstadt",
  created() {
    this.setImgUrl();
    this.initImgs();
  },
  mounted() {
    // this.initImgs();
  },
  data() {
    return {
      imgPath: "../../assets/Landscape/mondstadt/",
      // imgPath: "D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\",
      // pics: ["果酒湖.jpg", "晨曦酒庄.png", "千风神殿.jpg"],
      imgs: [],
      // imgs: [
      //   require("../../assets/Landscape/mondstadt/果酒湖.jpg"),
      // {
      //   url: require("../../assets/Landscape/mondstadt/果酒湖.jpg"),
      // },
      //   // {
      //   //   url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\果酒湖.jpg"),
      //   // },
      //   // {
      //   //   url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\晨曦酒庄.png"),
      //   // },
      //   // {
      //   //   url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\千风神殿.jpg"),
      //   // },
      //   // {
      //   //   url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\清泉镇.jpg"),
      //   // },
      // ],
    };
  },
  computed: {
    // imgs() {
    //   console.log("imgs被调用了");
    //   var images = [];
    //   for (var i = 0; i < this.pics.length; i++) {
    //     var path = this.imgPath + this.pics[i];
    //     console.log(path);
    //     images[i] = require(path);
    //   }
    //   console.log(images);
    //   return images;
    // },
  },
  methods: {
    initImgs() {
      console.log("initImgs被调用了");
      const req = require.context(
        "../../assets/Landscape/mondstadt",
        true

        // /\.png|jpg$/
      );
      var idx = 0;
      req.keys().forEach((eachPng) => {
        const imgConfig = req(eachPng);
        console.log(imgConfig);

        // const imgName = eachPng.replace(/^\.\/(.*)\.\w+$/, "$1");
        // console.log(imgName);
        this.imgs[idx] = this.imgPath + imgConfig.substr(5, imgConfig.length);

        // this.imgs[idx] = this.imgPath + eachPng.substr(2, eachPng.length);
        console.log(this.imgs[idx]);
      });
      // for (var i = 0; i < this.pics.length; i++) {
      //   var path = this.imgPath + this.pics[i];
      //   console.log(path);
      //   this.imgs[i] = url(path);
      //   console.log(pathis.imgs[i]);
      // }
    },
    setImgUrl() {
      //   var imgPath = "D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt";
      //   const path = require(imgPath);
      //   //读取文件的路径 是否遍历文件的子目录 匹配文件正则表达式
      //   const files = require.context(
      //     imgPath,
      //     false,
      //     /\.(png|jpg|gif|jpeg|webp|ico)$/
      //   );
      //   //files(key).default拿到该模块的vue对象
      //   files.keys().forEach((key) => {
      //     const name = path.basename(key);
      //     console.log(name);
      //   });
    },

    logInfo() {
      // console.log(this.images);
    },
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-image {
  height: 130%;
}
</style>
