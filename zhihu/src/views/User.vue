<template>
    <div>
        <div style="margin-top:20px;">
            <van-sticky>
            
                <van-image
                round
                width="4.5rem"
                height="4.5rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                fit="cover"
                />
        

   
            </van-sticky>
            小猫咪
        </div>

        <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        </van-divider>
        <van-cell is-link @click="showPopup">个人资料</van-cell>
        <van-popup v-model="show" closeable close-icon-position="top-left" position="right" :style="{ height: '100%', width:'100%' }">
            <van-nav-bar
            title="个人资料"
            />
            i am shit
        </van-popup>
    </div>
</template>

<script>
    // import { Toast } from 'vant';
    export default {
        data() {
            return {
                show: false,
            }
        },
        methods: {
            showPopup() {
                this.show = true;
            },
        },
    }
</script>

<style>

</style>
