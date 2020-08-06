<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端,到学问">
      <div slot="right" class="shortcut">
        <router-link to="/Reg">注册</router-link>
        <router-link to="/Login">登录</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item
        v-for="(item,index) of category"
        :key="index"
        :id="item.id"
      >{{item.category_name}}</mt-tab-item>
    </mt-navbar>
    <!-- <h1>{{articles.length}}</h1> -->
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div
      class="panel"
      infinite-scroll-distance="10"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-immediate-check="true"
    >
      <mt-tab-container v-model="active">
        <mt-tab-container-item :id="item.id" v-for="(item,index) of category" :key="index">
          <!-- 单一文章开始 -->
          <div class="InfoItem" v-for="(article,index) of articles" :key="index">
            <!-- 标题信息开始 -->
            <div class="InfoItemHeader">
              <router-link :to="`/article/${article.id}`">
              {{article.subject}}
              </router-link></div>
            <!-- 简介与缩略图区域开始 -->
            <div class="InfoItemContent">
              <!-- 简介开始 -->
              <div class="InfoItemDes">
                {{article.description}}
                <!--简介结束  -->
              </div>
              <router-link :to="`/article/${article.id}`">
              <img class="InfoItemImg" v-lazy="article.image" v-if="article.image!=null" />
              </router-link>
            </div>
            <!-- 简介与缩略图区域结束 -->

            <!-- 标题信息结束 --> 
          </div>
          <!-- 单一文章结束 -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部的选项卡开始 -->
    <mt-tabbar v-model="selectTab" fixed>
      <mt-tab-item id="home">
        首页
        <img src="../assets/rel.png" slot="icon" v-if="selectTab=='home'" />
        <img src="../assets/logo.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="cart">
        购物车
        <img src="../assets/rel.png" slot="icon" v-if="selectTab=='cart'" />
        <img src="../assets/logo.png" v-else slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="center">
        个人中心
        <img src="../assets/rel.png" slot="icon" v-if="selectTab=='center'" />
        <img src="../assets/logo.png" v-else slot="icon" />
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部的选项卡结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      //默认被选定的顶部选项卡及面板id
      active: 1,
      // 默认选定的底部选项卡
      selectTab: "home",
      // 存储文章分类信息
      category: [],
      // 存储文章数据
      articles: [],
      // 存储当前页码
      page: 1,
      // 存储服务器返回的总页数
      pagecount: 0,
      // 用来服务器当前可以处理请求
      busy:false
    };
  },
  watch: {
    // 监听顶部选项卡的变化
    active() {
      // 切换顶部选项卡时清空之前保存的数据
      this.articles = [];
      // 切换选项卡时，页码初始值为1
      this.page = 1;
      this.loadData();
    },
    // 监听底部选项卡的变化
    selectTab() {
      switch (this.selectTab) {
        case "home":
          this.$router.push("/");
          break;
        case "cart":
          this.$router.push("/list");
          break;
        case "center":
          this.$router.push("/navbar");
          break;
      }
    },
  },
  // 在挂载后发送请求，以获得web服务器的数据
  mounted() {
    // 获得文章分类信息，决定顶部选项卡
    this.axios.get("/category").then((res) => {
      this.category = res.data.results;
    });
    // 获取默认顶部选项卡包含的文章列表
    // 传参是因为现在客户端只获取特定分类下包含的文章数据，通过参数告知服务器
    this.loadData();
  },
  methods: {
    loadData() {
      // 当前服务器正在处理请求,即使在进行滚动范围也不再触发滚动指令
      this.busy=true;
      // 显示加载提示框
      this.$indicator.open('加载中');
      this.axios
        .get("/articles?cid=" + this.active + "&page=" + this.page)
        .then((res) => {
          let data = res.data.articles;
          // 将服务器返回的总页数存储到pagecount中
          this.pagecount = res.data.pageCount;
          data.forEach((item) => {
            if (item.image != null) {
              item.image = require("../assets/articles/" + item.image);
            }
            this.articles.push(item);
          });
          // 代表服务器已经可以继续处理接下来滚动的指令了
          this.busy=false;
          // 关闭加载提示框
          this.$indicator.close();
        });
    },
    loadMore() {
      // 页码累加
      this.page++;
      if (this.page <= this.pagecount) {
        // 获取当前分类下的第几页的数据
        this.loadData();
      }
    },
  },
};
</script>
<style scoped>
.mint-header {
  background-color: #f00;
}
.shortcut a {
  padding-left: 5px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
}
.panel {
  margin-top: 10px;
  margin-bottom: 55px;
}
/* 单一文章信息容器 */
.InfoItem {
  padding: 15px 0 14px;
  margin: 0 15px;
  border-bottom: 0.5px solid #d3d3d3;
}
/* 文章标题信息 */
.InfoItemHeader {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.InfoItemHeader a{
  text-decoration: none;
  color: #000;
}
/* 简介与缩略图容器 */
.InfoItemContent {
  display: -ms-flexbox;
  display: flex;
  padding-top: 11px;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}
/*  当前简介*/
.InfoItemDes {
  flex: 1;
  position: relative;
  -webkit-line-clamp: 3;
  height: 63px;
  font-size: 15px;
  padding-right: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
  margin-right: 4px 15px;
  -webkit-box-orient: vertical;
}
/* 缩略图 */
.InfoItemImg {
  width: 112px;
  height: 74px;
  border-radius: 5px;
  background: #ccc;
}
</style>