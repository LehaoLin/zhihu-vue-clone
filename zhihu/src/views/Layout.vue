<template>
    <div>
        <router-view>
        </router-view>
            <van-tabbar v-model="active" @change="onChange">
                <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
                <van-tabbar-item icon="like-o" to="/like">收藏</van-tabbar-item>
                <van-tabbar-item icon="friends-o" to="/friends">朋友</van-tabbar-item>
                <van-tabbar-item icon="user-o" to="/user">个人</van-tabbar-item>
            </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
            }
        },
        methods: {
            onChange() {
                console.log(this.active);
            },
            race() {
                var router_name = this.$route.path;
                if (router_name == "/" ){
                    this.active = 0;
                }
                if (router_name == "/like"){
                    this.active = 1;
                }
                if (router_name == "/friends") {
                    this.active = 2;
                }
                if (router_name == "/user") {
                    this.active = 3;
                }
            }
        },
        mounted() {
            this.race();
        },
    }

</script>

<style lang="scss" scoped>

</style>