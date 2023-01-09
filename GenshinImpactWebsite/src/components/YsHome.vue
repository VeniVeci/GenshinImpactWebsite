<template>
  <!-- <el-container class="home-container"> -->
  <!-- <el-header></el-header> -->
  <el-container class="home-container">
    <el-aside :width="isCollapse ? '64px' : '180px'">
      <div class="toggle-button" @click="toggleCollapse">|||</div>
      <el-menu
        router
        :default-active="this.$router.path"
        active-text-color="#409eff"
        :collapse="isCollapse"
        :collapse-transition="false"
        unique-opened
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>角色相关</span>
          </template>
          <el-menu-item index="/relationGraph">
            <template slot="title">
              <i class="el-icon-user"></i>人物关系图谱</template
            >
          </el-menu-item>

          <el-menu-item index="/CarouselChart">
            <template slot="title">
              <i class="el-icon-circle-check"></i>走马灯</template
            >
          </el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-video-camera-solid"></i>
            <span>观景点</span></template
          >
          <el-menu-item index="/mondstadt">
            <template slot="title">
              <i class="el-icon-circle-check"></i>蒙德</template
            >
          </el-menu-item>
          <el-menu-item index="/liyue">
            <template slot="title">
              <i class="el-icon-circle-check"></i>璃月</template
            >
          </el-menu-item>
          <el-menu-item index="1-4-1">
            <template slot="title">
              <i class="el-icon-circle-check"></i>稻妻</template
            >
          </el-menu-item>
          <el-menu-item index="1-4-1">
            <template slot="title">
              <i class="el-icon-circle-check"></i>须弥</template
            >
          </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-video-camera-solid"></i>
            <span>相关视频</span></template
          >
          <el-menu-item index="/zhongli">
            <template slot="title">
              <i class="el-icon-circle-check"></i>钟离</template
            >
          </el-menu-item>
          <el-menu-item index="/yrzhong">
            <template slot="title">
              <i class="el-icon-circle-check"></i>愚人众</template
            >
          </el-menu-item>
          <el-menu-item index="/snpg">
            <template slot="title">
              <i class="el-icon-circle-check"></i>神女劈观</template
            >
          </el-menu-item>
          <el-menu-item index="/klee">
            <template slot="title">
              <i class="el-icon-circle-check"></i>kleeeeeee</template
            >
          </el-menu-item>
        </el-submenu>

        <el-submenu index="/website">
          <template slot="title" index="/website">
            <i class="el-icon-video-camera-solid"></i>
            <span>相关网站</span></template
          >
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  <!-- </el-container> -->
</template>

<script>
import MovePic from "./Roles/CarouselChart.vue";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    MovePic,
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-aside {
  background-color: white;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #e9edf1;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 29px;
  color: #fff;
  text-align: center;
  letter-spacing: 5px;
  cursor: pointer;
}

li {
  .el-menu-item {
    width: 180px;
    padding: 0 0 0 0;
  }
}

span {
  margin-left: 10px;
}
</style>
