<template>
  <div>
    <mt-tabbar v-model="selectTab" fixed>
      <mt-tab-item id="home">
        首页
        <img src="../../assets/rel.png" slot="icon" v-if="selectTab=='home'" />
        <img src="../../assets/logo.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="cart">
        购物车
        <img src="../../assets/rel.png" slot="icon" v-if="selectTab=='cart'" />
        <img src="../../assets/logo.png" v-else slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="center">
        个人中心
        <img src="../../assets/rel.png" slot="icon" v-if="selectTab=='center'" />
        <img src="../../assets/logo.png" v-else slot="icon" />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectTab: 'home',
    };
  },
  watch: {
    selectTab() {
      switch (this.selectTab) {
        case "home":
          this.$router.push("/");
          break;
        case "cart":
          this.$router.push("/list");
          break;
        case "center":
          this.$router.push("/");
          break;
      }
    },
  },
};
</script>