<template>
    <div class="contain">
        <!-- 输入框 -->
        <div class="searchWrap">
            <form class="form-container">
                <icon type="search" 
                    size="16" 
                    style="position:absolute;left:44rpx;top:22rpx;z-index:90;">
                </icon>
                <input type="search"
                       class="form-search" 
                       placeholder-class="phcolor" 
                       v-model="searchValue" 
                       @input="searchInput" 
                       placeholder="请输入您想要搜索的关键字"/>
                <span @click="getSearch">搜索</span>
                <img class="delIcon" 
                     v-if="searchValue" 
                     @click="delValue" 
                     src="/static/images/del.jpg">
            </form>
        </div>

        <div class="searchL" v-if="!searchValue && !showQuery">
            <div class="history" 
                @click="seHistory">
                我的搜索历史
                <span class="delS" 
                @click="historyEmpty">
                清除搜索历史
                </span>
            </div>

                <!-- 搜索历史 -->
            <div class="historyCon">
                <span 
                    v-for="(item,index) in historyData" 
                    @click="getHistorySearch(item)" 
                    :key="index" >
                    {{item}}
                </span>
            </div>

                <!-- 大家都在搜 -->
            <div class="history">大家都在搜</div>
            <div class="historyCon">
                <span 
                    v-for="(item , index) in evOneSearch" 
                    @click="getEveOneSearch(item)"
                    :key="index" >
                    {{item}}
                </span>
            </div>
        </div>
            <!-- 输入框搜索关键字，关键字下拉 -->
        <div class="searchL" v-if="searchValue && !showQuery">
            <ul class="queryList">
                <li v-for="(item , index) in seaKeyWord" 
                :key="index" 
                @click="searchInfo(item)">
                {{item}}
                </li>
            </ul>
        </div>

            <!-- 点击关键字，搜索数据，显示的页面列表 -->
        <div class="searchL" v-if="showQuery">
            <div class="numHarvest">共搜索到<span>10</span>条相关内容</div>
            <div class="container">
                <div class="messaggeList" v-for="item in dataList" :key="item.ID">
                    <mrPictureComponent 
                        :dataObj = 'item' 
                        v-if="item.images.length >= 3 && item.contentType == 'Article'">
                    </mrPictureComponent>
                    <sgPictureComponent 
                        :dataObj = 'item' 
                        v-if="item.images.length == 1 && item.contentType == 'Article'">
                    </sgPictureComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sgPictureComponent from '../../components/sgPicture-view.vue'
import mrPictureComponent from '../../components/mrPicture-view.vue'
export default {
    data(){
        return{
            searchValue:null,
            isIcondel:false,
            showQuery:false,
            historyData:["无限","无限极","无限美好","无限极产品","无限屏"],
            evOneSearch:["密集修复","人才晋升","质量标杆","业务","梦想","溯源之旅"],
            seaKeyWord:["密集修复","人才晋升","质量标杆","业务","梦想","溯源之旅"],
            dataList:[]
        }
    },
    components: {
        sgPictureComponent,
        mrPictureComponent
    },
    methods:{
        onSearch(){
            const url = '../index/main'
            wx.switchTab({url})
        },
        searchInput() {
            this.showQuery = false;
        },
        delValue(){
            this.searchValue = ''
            this.showQuery = false
        },
        getSearch(){
            if(this.searchValue){
                this.showQuery = true
            }else{
                this.showQuery = false
            }
        },
        getHistorySearch(historyName) {
            // console.log(historyName);
        },
        getEveOneSearch(searchName) {
            // console.log(searchName);
        },
        searchInfo() {
            this.showQuery = true;
        },
        historyEmpty(){
            this.historyData = ''
        },
        seHistory() {
            //搜索历史接口
        }
    },
    mounted(){

       setTimeout(() => {
           this.dataList = this.$_arr;
       },3000)

    },
    beforeMount() {
        this.searchValue = null;
        this.isIcondel = false;
        this.showQuery = false;
    }
}
</script>
<style>
.phcolor{
    font-size: 13px;
    color:#b2b2b2;
}
.searchWrap{
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    background:#FC6154;
    position: fixed;
    top: 0;
    z-index: 999;
}


.delIcon{
    width:36rpx;
    height:38rpx;
    position: absolute;
    right:156rpx;
    top:36rpx;
}


.form-search{
    display:inline-block;
    vertical-align:middle;
    width: 480rpx;
    height:56rpx;
    background: #fff;
    border-radius: 50rpx;
    border: 1rpx solid #dfdfdf;
    font-size: 26rpx;
    margin-left: 16rpx;
    margin-right:40rpx;
    padding-left: 76rpx;
    padding-right: 40rpx;
}


.form-container label{
    display: inline-block;
    vertical-align:middle;
    font-size: 14px;
    color: #FFFFFF;
}


.searchL{
    margin-top: 100rpx;
}


.history{
    color: #E4BB91;
    font-size: 14px;
    padding-top: 44rpx;
    margin-left: 40rpx;
    position: relative;
}


.delS{
    border: 1rpx solid #ec9b4b;
    border-radius: 5rpx;
    padding: 2rpx 8rpx;
    position: absolute;
    right: 40rpx;
    top: 40rpx;
}


.historyCon{
    margin-left: 40rpx;
    margin-right: 40rpx;
    margin-top: 20rpx;
    /* font-size: 18px; */
}


.historyCon span{
    background: #eee;
    padding:15rpx 0rpx;
    margin:24rpx 24rpx;
    display:inline-block;
    font-size:28rpx;
    text-align:center;
    min-width:168rpx;
}

.queryList li{
    font-size: 28rpx;
    color: #666;
    margin-left: 20rpx;
    padding: 24rpx 0 24rpx 24rpx; 
    border-bottom: 1rpx solid #eee;
}

.numHarvest{
    text-align: center;
    font-size: 16px;
    color: #666;
    padding: 15rpx 0;
    border-bottom: 1rpx solid #333;
}

.numHarvest span{
    color: red;
}

</style>

