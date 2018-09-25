<template>
    <div class="pictureWrap">
        <div class="main">
            <div class="main-top">
                <img src="/static/images/swiperlist3.png" alt="">
                <div class="picCon">
                    <p class="title">2018海外培训“激扬之旅”</p>
                    <p class="loadDown" @click="down_file"><span>图</span>查看下载进度</p>
                </div>
                <div class="picTxt">
                    晋升表彰是非常激动人心的，那么，近年来公司举办了哪些高阶晋升表彰活动呢
                </div>
            </div>
            <div class="picList">
                <div class="picList-title">开幕晚宴</div>
                <ul class="picList-UL">
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                </ul>
            </div>
            <div class="picList">
                <div class="picList-title">嘉宾致辞</div>
                <ul class="picList-UL">
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                    <li><img src="/static/images/swiperlist6.png" alt=""></li>
                </ul>
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
        }
    },
    methods:{
        preview_img(){//图片预览函数
        wx.previewImage({
            current: this.url[0], // 当前显示图片的http链接
            urls: this.url // 需要预览的图片http链接列表
            })
        },
        down_file(){
            var _this = this;
            const downloadTask=wx.downloadFile({
            url: 'http://img0.imgtn.bdimg.com/it/u=1573149064,335172224&fm=27&gp=0.jpg', //仅为示例，并非真实的资源
            success: function (res) {
                // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            console.log(res)
            if(res.statusCode === 200){
                // _this.setData({
                //     img_l:res.tempFilePath //将下载的图片临时路径赋值给img_l,用于预览图片
                // })
                _this.url.push(res.tempFilePath)
                console.log('ffff',_this.url)
            }
            }
            })
            downloadTask.onProgressUpdate((res) => {
            console.log('下载进度', res.progress)
            console.log('已经下载的数据长度', res.totalBytesWritten)
            console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
            })
        }

    }
}
</script>

<style>
.pictureWrap{

}
.pictureWrap .main img{
    width: 750rpx;
    height: 375rpx;
}
.pictureWrap .picCon{
    display: flex;
    text-decoration: row;
    justify-content: space-between;
    align-items: center;
    margin: 15rpx 25rpx;
}
.pictureWrap .picCon .title{
    font-size: 30rpx;
    color: #333333;
}
.pictureWrap .picCon .loadDown{
    font-size: 26rpx;
    color: #BC2826;
}
.picTxt{
    font-size: 26rpx;
    color: #333333;
    margin: 0 25rpx;
    line-height: 42rpx;
}
.picList{
    background: #F6F6F6;
    padding: 30rpx;
    margin: 30rpx 0;
}
.picList-title{
    font-size: 36rpx;
    color: #333333;
    /* margin-bottom: 20rpx; */
}
.picList-UL{
    text-align:center;
    font-size: 0;
}
.picList-UL li{
    display: inline-block;
    width:32%;
    margin-right: 10rpx;
    margin-top:30rpx;
    overflow: hidden;
}
.picList-UL li:nth-child(3n){
    margin-right:0;
}
.picList-UL li img{
    width: 226rpx;
    height: 148rpx;
}
</style>

