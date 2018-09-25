<template>
    <div>
        <div class="picture" v-for="(item , index) in imgData" :key="index" @click="goPictureDetail(item)">
            <img class="picture-pic" :src="item.logoFile">
            <div class="picture-txt">
                <span class="rightCorner">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgData:[{
                "ID":3524,
                "name":"2018海外培训“激扬之旅”",
                "info":"激扬之旅有多hign,无限极携手黄金海岸旅游局打造了一场专属狂欢嘉年华！",
                "contentType":"Image",
                "hitCount":9383,
                "logoFile":"https://dummyimage.com/450x250"
            },{
                "ID":3525,
                "name":"企业文化",
                "info":"企业文化介绍。",
                "contentType":"Image",
                "hitCount":9332,
                "logoFile":"https://dummyimage.com/450x250"
            },
            {
                "ID":3525,
                "name":"企业文化",
                "info":"企业文化介绍。",
                "contentType":"Image",
                "hitCount":9332,
                "logoFile":"https://dummyimage.com/450x250"
            },
            {
                "ID":3525,
                "name":"企业文化",
                "info":"企业文化介绍。",
                "contentType":"Image",
                "hitCount":9332,
                "logoFile":"https://dummyimage.com/450x250"
            },
            {
                "ID":3525,
                "name":"企业文化",
                "info":"企业文化介绍。",
                "contentType":"Image",
                "hitCount":9332,
                "logoFile":"https://dummyimage.com/450x250"
            }
            ]
        }
    },
    methods:{
        goPictureDetail(item){
            let url = '../pictureDetail/main'
            wx.navigateTo({url})
        }
    },
    onPullDownRefresh: function(){
        console.log('下拉加载，1999191991')
        wx.showToast({
            title: '加载中...',
            icon: 'none',
            duration: 600
        });
        setTimeout(() => {
        wx.stopPullDownRefresh()

        },3000)
    },
  onReachBottom() {
    console.log('上拉加载。。。。')
    // 到这底部在这里需要做什么事情
    // this.loadMore();
      wx.showToast({
            title: '加载中...',
            icon: 'none',
            duration: 600
      });
  },

}
</script>

<style>
.picture {
  /* padding:0 30rpx; */
  margin-bottom:30rpx;
  position: relative;
}
.picture .picture-pic{
  width:750rpx;
  height: 345rpx;
  vertical-align:middle;
}
.picture-txt{
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #fff;
  opacity: .8;
  text-align:right;
  position: absolute;
  left: 0rpx;
  bottom: 0;
}
.picture-txt span{
  font-size: 28rpx;
  color: #333;
  padding-right: 24rpx;
}
</style>
