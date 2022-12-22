<template>
  <el-carousel :interval="1000" height="600px" indicator-position="outside">
    <el-carousel-item v-for="item in pics" :key="item.url">
      <el-image :src="item.url"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Mondstadt",
  created() {
    this.setImgUrl();
  },
  data() {
    return {
      pics: [
        {
          url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\果酒湖.jpg"),
        },
        {
          url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\晨曦酒庄.png"),
        },
        {
          url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\千风神殿.jpg"),
        },
        {
          url: require("D:\\FrontEnd\\vueDemo\\src\\assets\\Landscape\\mondstadt\\清泉镇.jpg"),
        },
      ],
    };
  },
  methods: {
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
