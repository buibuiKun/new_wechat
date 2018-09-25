<template>
    <div class="commentWrap">
        <div class="commentTit">
            暑假来了，别让孩子的健康也“放假”
        </div>
        <div class="textCon">
            <textarea name="" id="" v-model="commentValue" cols="30" rows="20" maxlength="-1" placeholder-class="phcolor" placeholder="开始评论吧"></textarea>
        </div>
        <button class="complete" @click="onComplete">{{commentValue ? btnTXT : btnTXT2}}</button>
        <div class="contentWrap">
            <div class="content" v-if="messageShow" v-for="(item,index) in mesData" :key="index">
                <div class="conPic">
                    <img src="/static/images/swiperlist4.jpg" alt="">
                </div>
                <div class="conPanel">
                    <div class="conTit">微信ID</div>
                    <P class="conP">
                        {{item.leavMes}}
                    </P>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            commentValue:null,
            messageShow:false,
            leavMes:null,
            mesData:[],
            btnTXT:'完成',
            btnTXT2:'评论'
        }
    },
    methods:{
        onComplete(){
            this.btnTXT = '操作'
            var _this = this
            setTimeout(function(){
                if(_this.commentValue){
                    let mes = {
                        leavMes:_this.commentValue
                    }
                    _this.mesData.push(mes)
                    _this.btnTXT = '完成'
                    wx.showToast({
                        title: '已提交',
                        icon: 'success',
                        duration: 2000
                    })
                }
                _this.messageShow = true
                _this.commentValue = ''
            },1000)
            
        }
    }
}
</script>

<style>
.phcolor{
    color:#B2B2B2;
}
page{
    height: 100%;
}
.commentWrap{
    width: 100%;
    height: 100%;
    background: #F5F6F8;
}
.contentWrap{
    background: #F5F6F8;
    padding-bottom:10rpx;
}
.commentTit{
    height: 140rpx;
    font-size: 48rpx;
    color: #000000;
    padding: 30rpx;
    background: #F5F6F8;
}
.textCon textarea{
    width:calc(100% - 60rpx);
    margin-bottom:15px;
    padding: 30rpx;
    color: #111;
    background: #fff;
}
.complete{
    width:90%;
    color: #fff;
    background-image: linear-gradient(-90deg,#EC9B4B 0%, #BC2826 100%);
    border: 2rpx solid rgba(5,5,5,0.08);
    border-radius: 10rpx;
}
.content{
    display: flex;
    /* justify-content:space-between; */
    margin: 50rpx 30rpx;
}
.content .conPic{
    flex: 0 0 100rpx;
    height: 100rpx;
    margin-right:15px;
}
.conPic img{
    width: 100rpx;
    height: 100rpx;
}
.conTit{
    font-size: 28rpx;
    color: #888888;
    margin-bottom:20rpx;
}
.conP{
    font-size: 34rpx;
    color: #111111;
    letter-spacing: 0;
    text-align: left;
}
</style>


