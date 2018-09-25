<template>
    <div class="authorWrap">
        <div class="imgbg"><img src="/static/images/bg.png" alt=""></div>
        <div class="">
            <div class="authorTit">登录后享受更多权益</div>
            <button class="sign" @click="onIndex">微信登录</button>
            <button class="signout" @click="onIndex">逛逛再说</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        onIndex(){
            console.log(8888)
            const url = '../index/main'
            wx.switchTab({url})
        },
    }
}
</script>
 
 <style>
 page{
     width: 100%;
     height: 100%;
 }
 .authorWrap{
     display:flex;
     flex-direction:column;
     justify-content: center;
     align-items: center;
     height: 100%;
     /* background: url('../../assets/images/bg.png'); */
}
.imgbg{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.imgbg img{
    width: 750rpx;
    height: 796rpx;
}
 .authorTit{
    font-size: 30rpx;
    color: #000000;
    margin-bottom: 40rpx;
    text-align: center;
 }
 .sign{
     width: 340rpx;
     height: 80rpx;
     font-size: 30rpx;
     color: #FFFFFF;
     background: #1AAD19;
     border-radius: 40rpx;
     margin-bottom: 40rpx;
 }
 .signout{
     width: 340rpx;
     height: 80rpx;
     font-size: 30rpx;
    color: #000000;
    background: #F8F8F8;
    border: 1rpx solid rgba(5,5,5,0.08);
    border-radius: 40rpx;
 }
 </style>
 