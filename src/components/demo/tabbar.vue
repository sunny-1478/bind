<template>
  <div>
    <mt-tab-container v-model="selectTab">
      <mt-tab-container-item id="home">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="cart">
        <p>2</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="center">
        <p>3</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </mt-tab-container-item>
    </mt-tab-container>
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
      selectTab: "",
    };
  },
};
</script>