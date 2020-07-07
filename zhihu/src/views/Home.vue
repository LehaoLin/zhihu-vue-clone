<template>
  <div>

    <div class="topshit1">
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
        <!-- <van-cell is-link @click="showPopup">发布内容</van-cell> -->
        <van-popup v-model="show" closeable close-icon-position="top-left" position="right" :style="{ height: '100%', width:'100%' }">
            <van-nav-bar
            title="发布内容"
            />
              <van-cell-group>
                <van-field v-model="input_value" label="标题" placeholder="请输入标题" />
              </van-cell-group>
              <van-field
                v-model="input_context"
                rows="2"
                label="留言"
                type="textarea"
                maxlength="500"
                placeholder="请输入留言"
                show-word-limit
              />
              <van-button round block type="info" native-type="submit">
                提交
              </van-button>
        </van-popup>

      <van-tabs v-model="active_tab">
        <van-tab title="关注" @click="home_follow"> </van-tab>
        <van-tab title="推荐" @click="home_recommend"></van-tab>
        <van-tab title="热榜" @click="home_hot"></van-tab>
      </van-tabs>
    </div>

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
    
  </div>
</template>

<script>

// import { Notify } from 'vant';
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
      isLoading: false,
      active_tab:0,
      tabOffsetTop: 0,
      scrollTop: 0,
      loading: false,
      finished: false,
      show: false,
      input_value:'',
      input_context: '',
    }
  },
  // mounted () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  methods:{
    onChange(index) {
      // Notify({ type: 'primary', message: index });
      console.log(index);
    },    
    onSearch(val){
      // Notify({ type: 'primary', message: val });
      console.log("val", val);
    },
    // onAdd(){
    //   console.log("添加")
    // },
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
    home_follow() {
      this.onRefresh();
    },
    home_recommend() {
      this.onRefresh();
    },
    home_hot() {
      this.onRefresh();
    },
    onAdd() {
      this.show = true;
    },
    // handleScroll () {
    //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   console.log(scrollTop)
    // },


  }
}


</script>

<style>

.van-tabs__line {
background-color: #61b2ff !important;
}

.topshit1 {
  position:sticky;
  top:0;
  width:100%;
  z-index:1;
}

</style>