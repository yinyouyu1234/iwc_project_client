<template>
  <div class="layout__warpper">
    <div class="globl__menu">
      <span @click="logout">退出</span>
    </div>
    <div class="menu_content">
      <div class="menu__box">
        <Menu theme="light" active-name="1" @on-select="goPage">
          <MenuItem v-for="item in menuList" :key="item.path" :name="item.path" >
            {{ item.label }}
          </MenuItem>
        </Menu>
      </div>
      <div class="view__content">
      <transition name="fade">
        <router-view/>
      </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      menuList: [
        {
          label: "渠道管理",
          path: "/index/express",
        },
        {
          label: "业务员管理",
          path: "/index/salesman",
        },
        {
          label: "货品信息",
          path: "/index/expressGoodsInfo",
        },
        {
          label: "数据采集",
          path: "/index/dataCollect",
        },
        {
          label: "库存管理",
          path: "/index/storeManage",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
    goPage(path) {
      this.$router.push(path);

    }
  }
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
  transform: perspective(800px) scale(0.5) translate(0px, 400px) rotateY(0deg) rotateX(10000deg);
}
.layout__warpper {
  height: 100%;
  width: 100%;
}
.globl__menu {
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding:  0 20px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.globl__menu span {
  cursor: pointer;
}
.menu_content {
  display: flex;
  height: calc(100% - 50px);
}
.menu__box {
}
.ivu-menu {
  height: 100%;
}
.view__content {
  flex: 1;
  height: 100%;
}
</style>