<template>
    <div>
        
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
    export default {
			data() {
				return {
					// list:[],
					// count: 0,
					// isloading: false,
					// loading: false,
					// finished: false,
					list:[],
					count: 0,
					value:'',
					isLoading: false,
					active_tab:0,
					tabOffsetTop: 0,
					scrollTop: 0,
					loading: false,
					finished: false,
				}
			},
			methods: {
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
			},

    }
</script>

<style lang="scss" scoped>

</style>