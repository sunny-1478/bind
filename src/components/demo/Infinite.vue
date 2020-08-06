<template>
<!-- 在本案例中各参数的说明如下 -->
<!-- infinite-scroll-distance="20" 滚动条距离容器底部小于等于20个像素时将触发一个函数来加载更多的数据 -->
<!-- v-infinite-scroll="loadMore" 是指触发的函数名称，用这个函数来加载更多的数据 -->
<!-- infinite-scroll-disabled 是指在执行滚动函数时  计时再滚动到指定范围内是否还要继续触发滚动函数-->
  <div 
    style="border:2px solid #f00"

    infinite-scroll-distance="20"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
  >
    <p v-for="(v,k) of n " :key="k">{{v}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 50,
      busy:false
    };
  },
  methods:{
      loadMore(){
          this.busy=true;
        //   假设现在服务器运行效率低 10s后返回结果
        window.setTimeout(() => {
            this.n+=50;
            this.busy=false;
        }, 5000);
          
      }
  }
};
</script>