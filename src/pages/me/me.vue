<template>
    <div class="userWrap">
        <div class="info">
            <div class="info-wrap">
                <img class="info-icon" :src="userInfo.avatarUrl" @click="navigateTo" data-url-type="userinfo" open-type="getUserInfo" />
                <div class="info-name">{{userInfo.nickName}}</div>
            </div>
        </div>
        <div class="operation">
            <ul class="operation-UL">
                <li>
                    <div class="imgWrap">
                        <img src="/static/images/zuJi.png" style="width:45rpx;height:65rpx;" alt="">
                    </div>
                    <p>我的足迹</p>
                </li>
                <li>
                    <div class="imgWrap">
                    <img src="/static/images/wenben.png" style="width:59rpx;height:59rpx;" alt="">
                    </div>
                    <p>我的评论</p>
                </li>
                <li>
                    <div class="imgWrap">
                    <img src="/static/images/Fill.png" style="width:59rpx;height:57rpx;" alt="">
                    </div>
                    <p>我的收藏<p/>
                </li>
                <li>
                    <div class="imgWrap">
                    <img src="/static/images/youyang.png" style="width:114rpx;height:114rpx;" alt="">
                    </div>
                    <p>有氧FM</p>
                </li>
                <li>
                    <div class="imgWrap">
                    <img src="/static/images/infinitus2.png" style="width:114rpx;height:83rpx;" alt="">
                    </div>
                    <p>无限极视频</p>
                </li>
            </ul>
            <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
        </div>
    </div>
</template>

<script>
// import {test} from '@/utils/iconfont'
export default {
    data(){
        return{
            userInfo: {}
        }
    },
    onLoad(){
        // this.getUserInfo ()
        this.userInfo = this.$store.state.usreInfo
        console.log('this.userInfo',this.userInfo)
    },
    methods:{
        getUserInfo () {
        // 调用登录接口
        wx.login({
            success: () => {
            wx.getUserInfo({
                success: (res) => {
                // alert(666)
                console.log('resmm',res)
                this.userInfo = res.userInfo
                }
            })
            }
        })
        }
    }
}
</script>

<style>
page{
    height: 100%;
}
.userWrap{
    width: 100%;
    height: 100%;
    background: #F5F6F8;
}

.info{
  width: 100%;
  height: 400rpx;
  margin-bottom:30rpx;
  background: #FC6154;
  /* background-size: 100%; */
}
.info-wrap{
  margin: auto;
  text-align: center;
}
.info-icon{
  width: 164rpx;
  height: 164rpx;
  border: 4.69rpx solid #fff;
  border-radius: 82rpx;
  margin-top: 105rpx;
  margin-bottom: 29.29rpx;
}
.info-name{
    font-size: 32rpx;
    color: #fff;
}
.operation-UL{
    display: flex;
    flex-flow: wrap;
}
.operation-UL li{
    flex: 0 0 33%;
    height: 220rpx;
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items:center;
    justify-content:center;
    border-right: 1rpx solid #ddd;
    border-bottom: 1rpx solid #ddd;
}
.operation-UL li:nth-child(3n){
    border-right: none;
}
.operation-UL li:nth-last-child(-n+2){
    border-bottom: none;
}
.operation-UL li img{
    /* width:114rpx;
    height:80rpx */
}
.operation-UL li p{
    font-size: 28rpx;
    color: #888888;
}
.imgWrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114rpx;
    height: 114rpx;
    overflow: hidden;
}
</style>
