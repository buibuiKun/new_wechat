<template>
    <div class="searchCon" @click= "routerGo">
        <div class="conTitle">
            <p>{{dataObj.title}}</p>
            <div class="viceWrap">
                <span class="conTxt">健康</span>
                <div class="conRight">
                    <span class="conV">@0</span><span class="conTime">2018-07-03</span>
                </div>
            </div>
        </div>
        <div class="pic">
            <img :src="dataObj.images[0].url">
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

.searchCon{
    display: flex;
    text-decoration: row;
    margin: 40rpx 40rpx;
}


.conTitle{
    margin-right: 20rpx;
}


.conTitle p{
    font-size: 38rpx;
    font-weight: bold;
    color: #333;
    margin-bottom:38rpx;
}


.conTitle span{
    font-size: 14px;
    color: #555;
}


.viceWrap{
    position: relative;
}


.conRight{
    position: absolute;
    right: 20rpx;
    bottom:0;
}


.conV{
    margin-right: 20rpx;
}


.pic img{
    width: 220rpx;
    height: 186rpx;
}

</style>


