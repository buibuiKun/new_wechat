<template>
    <div class="searchConTwo" @click= "routerGo">
        <div class="articleTitle">{{dataObj.title}}</div>
        <div class="articlePic">
            <scroll-view class="image-group" scroll-x="true">
                <img v-for="(imgItem , idx) in dataObj.images" :key="idx" :src="imgItem.url">
            </scroll-view>
        </div>
        <div class="articleVice">
            <span class="conTxt">健康</span>
            <div class="conRight">
                <span class="conV">@0</span><span class="conTime">2018-07-03</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"sgPicture-view",
    props: {
        dataObj: {
            type: Object,
            default: []
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log(this.dataObj,'dataObjdataObj')
    },
    methods: {
        routerGo() {
            console.log(this.dataObj);
        }
    }
}
</script>

<style lang="scss" scoped>

.searchConTwo{
    padding: 40rpx 40rpx;
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #333;
}

.articleTitle{
    font-size: 38rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 10rpx;
}

.articlePic{
    /* display: flex; */
    width:100%;
    height:186rpx;
    text-decoration: row;
}

.image-group {
  display: flex;
  white-space: nowrap;
  margin-top: 30rpx;
}

.articlePic img{
    display:inline-block;
    width:32%;
    height: 186rpx;
    margin-right: 2%; 
}

.articlePic img:last-child{
    margin-right: 0;
}

.articleVice{
    position: relative;
}


.articleVice span{
    font-size: 14px;
    color: #555;
}

</style>


