<template>
    <div class="main">
        <div class="title">要想成为“东方女神”，护肤都有什么秘诀</div>
        <div class="subsidiary"><span>2718-08-27</span><span>护肤技巧</span><span>无限极业务导航</span></div>
        <div class="content">
            <p class="daodu">
                导读：眼下，无限极2018养生行走暨健康嘉年华活动正在全国各大城市火热举行。昨日，该活动就在太原、哈尔滨两站齐发，并在当地刮起了一阵健康风，快随小i感受一下现场的活力吧！
            </p>
            <p>对于简单函数，我们可以根据公式直接计算出其导数。但是对于复杂的函数，我们就没那么容易直接写出导数。但是我们有</p>
            <p>如果变量x，y在前向传播的表达式中出现多次，那么进行反向传播的时候就要非常小心，使用+=而不是=来累计这些变量的梯度
                （不然就会造成覆写）。这是遵循了在微积分中的多元链式法则，该法则指出如果变量在线路中分支走向不同的部分，那么梯
                度在回传的时候，就应该进行累加。</p>
            <p><img @click="imgYu" :data-list="url" data-src="http://f11.baidu.com/it/u=2202664904,230612853&fm=72" src="/static/images/swiperlist4.jpg" alt=""></p>
            <!-- <p><img src="/static/pdf/toutiao.pdf" alt=""></p> -->
            <image :src="source" mode="aspecFill" style="width: 640rpx; height: 640rpx"/>
        </div>
        <!-- <div class="swiperContainer" style="background: #333;">
            <swiper style="height: 1000rpx;transform: translate(0%,25%);" @change="swiperChange" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                
                    <swiper-item v-for="(item,index) in url" :key="index">
                        <image :src="item" class="slide-image" mode="center"/>
                    </swiper-item>
                
            </swiper>
            <div class="imageCount">{{current+1}}/{{url.length}}</div>
        </div> -->

        <div class="bar-bottom">
            <div class="barItem">
                <img src="/static/images/share.png">
                <button open-type="share">分享</button>
            </div>
            <div class="barItem">
                <img src="/static/images/praise.png" alt="">
                <div class="txt">点赞<span>1</span></div>
            </div>
            <div class="barItem" @click="goComment">
                <img src="/static/images/comments.png" alt="">
                <div class="txt">评论<span>1</span></div>
            </div>
            <div class="barItem">
                <img src="/static/images/collection.png" alt="">
                <div class="txt">收藏<span>6</span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url:[
                'http://f11.baidu.com/it/u=2202664904,230612853&fm=72',
                'http://img0.imgtn.bdimg.com/it/u=1573149064,335172224&fm=27&gp=0.jpg'
                ],
            source:'' ,
            current:''   
        }
    },
    methods:{
        goComment(){
            console.log('666')
            let url = '../comment/main'
            wx.navigateTo({url})
        },
        swiperChange(e){
            console.log('eeeee',e)
            this.current = e.target.current
        },
        
        //图片点击事件
        imgYu(event){
            console.log('event',event)
            var src = event.currentTarget.dataset.src;//获取data-src
            var imgList = event.currentTarget.dataset.list;//获取data-list
            //图片预览
            wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: imgList // 需要预览的图片http链接列表
            })
            // wx.chooseImage({
            //     count: 1, // 默认9
            //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            //     success: function (res) {
            //         // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            //         that.setData({
            //         source : res.tempFilePaths
            //         })
            //     }
            // })
        }
    }
}
</script>

<style>
.main{
    margin-top: 40rpx;
    padding-bottom: 40px;
}
.title{
    font-size: 48rpx;
    /* font-weight: bold; */
    color: #000;
    margin: 0 40rpx;
}
.subsidiary{
    display: flex;
    justify-content: space-around;
    margin-top: 20rpx;
}
.subsidiary span{
    font-size: 15px;
    color: #888;
    margin-right: 20rpx;
}
.content{
    margin: 60rpx 40rpx 0 40rpx;
}

.content p{
    font-size: 34rpx;
    color: #111;
    line-height: 52rpx;
    margin-bottom: 50rpx;
}
.content .daodu{
    font-size: 30rpx;
    color: #666666;
    padding: 10rpx;
    background: #f9f9f9;
}
.bar-bottom{
    width:100%;
    display:flex;
    height:100rpx;
    background:#fff;
    justify-content:center;
    align-items:center;
    border: 1rpx solid #dfdfdf;
    position:fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
}
.barItem{
    width:25%;
    text-align: center;
    padding:6rpx 0;
}
.barItem img{
    display:block;
    width: 40rpx;
    height: 40rpx;
    margin:0 auto;
}
.barItem .txt{
    font-size: 20rpx;
    color: #888;
}
</style>

