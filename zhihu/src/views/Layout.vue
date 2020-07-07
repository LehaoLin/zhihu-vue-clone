<template>
    <div>
        <router-view>
        
        </router-view>
            <van-tabbar v-model="active" @change="onChange">
                <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
                <van-tabbar-item icon="like-o" to="/like">收藏</van-tabbar-item>
                <van-tabbar-item icon="friends-o">朋友</van-tabbar-item>
                <van-tabbar-item icon="user-o">个人</van-tabbar-item>
            </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:'',
            }
        },
        methods: {
            onChange() {
                console.log(this.active);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>