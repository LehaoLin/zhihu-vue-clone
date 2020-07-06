<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      >
      <template #action>        
        <van-icon name="add-o" @click="onAdd"></van-icon>
      </template>
    </van-search>

    <van-tabs v-model="active_tab">
      <van-tab title="关注"></van-tab>
      <van-tab title="推荐"></van-tab>
      <van-tab title="热榜"></van-tab>
      <van-tab title="视频"></van-tab>
    </van-tabs>


      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
        
        <p>刷新次数: {{ count }}</p>
      </van-pull-refresh>


    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="like-o">收藏</van-tabbar-item>
      <van-tabbar-item icon="friends-o">朋友</van-tabbar-item>
      <van-tabbar-item icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
  
    
  </div>
</template>

<script>

import { Notify } from 'vant';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      list:[],
      count: 0,
      value:'',
      active:'',
      isLoading: false,
      loading: false,
      finished: false,
      active_tab:1,
    }
  },
  methods:{
    onChange(index) {
      Notify({ type: 'primary', message: index });
    },    
    onSearch(val){
      Notify({ type: 'primary', message: val });
      console.log("val", val);
    },
    onAdd(){
      console.log("添加")
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },

  }
}
</script>

<style>
# search {
  margin: 0px;
}
.van-tabs__line {
background-color: #61b2ff !important;
}

</style>