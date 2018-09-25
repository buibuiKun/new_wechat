<template>
    <div class="infintVideo">
        <div class="content">
            <div class="videoMain">
                <video :src="videoSrc" binderror="videoErrorCallback" enable-danmu controls class="infintsVideo"></video>
            </div>
            <div class="videoDescript">
                <div class="title">
                    <span>{{dataSet.title}}</span>
                </div>
                <div class="contentMain">
                    <p> 
                        <span>简介</span>
                    </p>
                    <div class="shortTitle">
                        {{dataSet.shortTitle}}
                    </div>
                    <div class="commentContent">

                    </div>
                </div>
            </div>    
        </div>
        <div class="comment">
            <button open-type="share" class="barItem">
                <div class="imgConent">
                    <img src="/static/images/share.png">
                </div>
                <div class="txt">分享</div>
            </button>
            <div class="barItem">
                <div class="imgConent">
                    <img src="/static/images/praise.png">    
                </div>
                <div class="txt">点赞<span>1</span></div>
            </div>
            <div class="barItem" @click="goComment">
                <div class="imgConent">
                    <img src="/static/images/comments.png">  
                </div>
                <div class="txt">评论<span>1</span></div>
            </div>
            <div class="barItem">
                <div class="imgConent">
                    <img src="/static/images/collection.png">
                </div>
                <div class="txt">收藏<span>6</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videoSrc: '',
            dataSet: {}
        }
    },
    mounted() {
        let items = JSON.parse(this.$root.$mp.query.params)
        //decodeURI
        let params = this.$util_func.encodeURI_url(
                items,
                ['logoFile','redirectURL','videoURL','fileURL','url','thumbnail'],
                decodeURIComponent
            )
        this.dataSet = params;
        this.videoSrc = this.dataSet.videoURL
    },
    methods: {
        clickVideo() {
            console.log(str,'rootroot')
        }
    }
}
</script>

<style lang="scss" scoped>

.infintVideo {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    .videoMain {
        width: 100%; 
        height: 450rpx;
        .infintsVideo {
            width: 100%;
            height: 427rpx;
        }
    }
    .videoDescript {
        width: 100vw;
        .title {
            min-height: 74rpx;
            width: 100%;
            padding: 24rpx 14rpx;
            box-sizing: border-box;
            >span {
                display: block;
                font-size: 18px;
                min-height: 26rpx;
                line-height: 26rpx;
            }
        }
        .contentMain {
            >p {
                height: 20px;
                line-height: 20px;
                padding: 0 14rpx;
                box-sizing: border-box;
                margin-bottom: 15px;
                >span {
                    display: block;
                    width: 36px;
                    height: 18px;
                    line-height: 18px;
                    text-align: center;
                    font-size: 14px;
                    border: 1px solid #76B6FF;
                    color: #76B6FF;

                }
            }
            .shortTitle {
                font-size: 14px;
                line-height: 15px;
                color: #666;
                padding: 0 14rpx;
                box-sizing: border-box;
            }
        }
    }
    .comment {
        width: 100%;
        height: 91rpx;
        overflow: hidden;
        position: fixed;
        left: 0;
        bottom: 0;
        border: 1px solid #DFDFDD;
        .barItem {
            width: 25%;
            height: 90rpx;
            float: left;
            .imgConent {
                height: 48rpx;
                padding-top: 9rpx;
                box-sizing: border-box;
                img {
                    display: block;
                    width: 40rpx;
                    height: 40rpx;
                    margin: 0 auto;
                }
            }
            .txt {
                height: 45rpx;
                font-size: 20rpx;
                text-align: center;
                color: #808080;
                line-height: 50rpx;
            }
        }
        button {
            width: 25%;
            height: 90rpx;
            float: left;
            font-size: 20rpx;
            text-align: center;
            color: #808080;
            border: 1px solid #fff;
            border-radius: 0;
            background: #fff;
            -webkit-tap-highlight-color:'';
        }
        button::after {
            border: 0;
        }
    }
}

</style>


