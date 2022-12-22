<template>
  <el-container class="home-container">
    <!-- <el-header></el-header> -->
    <el-container>
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
            <el-menu-item index="1-4-2">
              <template slot="title">
                <i class="el-icon-s-check"></i>四神</template
              ></el-menu-item
            >
            <el-menu-item index="/carouselChart">
              <template slot="title">
                <i class="el-icon-circle-check"></i>轮播图</template
              >
            </el-menu-item>

            <el-menu-item index="/movePic">
              <template slot="title">
                <i class="el-icon-circle-check"></i>走马灯</template
              >
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-video-camera-solid"></i>观景点</template
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
              <i class="el-icon-video-camera-solid"></i>二创内容</template
            >
            <el-menu-item index="/zhongli">
              <template slot="title">
                <i class="el-icon-circle-check"></i>钟离</template
              >
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CarouselChart from "./Roles/CarouselChart.vue";
import MovePic from "./Roles/MovePic.vue";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    CarouselChart,
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
  background-color: #2e343f;
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
</style>
