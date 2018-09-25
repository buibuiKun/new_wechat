<template>
  <div class="container" 
    @click="clickHandle('test click', $event)">
    <div class="tab-top">
      <form class="form-container">
        <icon type="search" 
          size="16" 
          style="position:absolute;left:182rpx;top:16rpx;z-index:90;">
        </icon>
        <input  placeholder-class="phcolor" 
            type="search" 
            class="form-search" 
            v-model="motto2" 
            @click="onSearch" 
            disabled 
            placeholder="请输入您想要搜索的关键字" />
      </form>
      <!-- tab切换.... -->
      <div class="tabScroll">
        <scroll-view scroll-x >
          <div v-for="(keyArr , index ) in tabChangList" 
            :key="index" 
            class="tab" 
            @click="tabChoose(keyArr.ID,keyArr)">
            <div class="tabTxt" :class="tabActive == keyArr.ID ? 'active':''" >{{keyArr.name}}</div>
          </div>
        </scroll-view>
        <div class="downArrow">
          <div class="wb"></div>
          <img src="/static/images/down.png" alt="">
        </div>
      </div>
    </div>
    
    <!-- 主体列表 -->
    <div class="mainContent" 
        v-for="(keyArr , index ) in tabChangList" 
        v-if="tabActive == keyArr.ID" 
        :key="index">

      <!-- 最新 -->
      <div class="listCon" v-if="tabActive == 1">
        <div class="contentList" v-for="(item , idx) in initData" :key="idx">
          <div class="proList" 
            @click="ondetail(item,tabActive)" 
            v-if="item.contentType == 'Article' && item.images.length == 1">
            <div class="member member1">
              <p>{{item.title}}</p>
              <div class="summary">
                <span>{{keyArr.name}}</span>
                <div class="time">
                  <span class="attention"><img src="/static/images/view.png">0</span>
                  <span>{{item.addTime}}</span>
                </div>
              </div>
            </div>
            <div class="member member2"><img :src="item.images[0].url"></div>
          </div>
          <div class="proList2" @click="ondetail(item)" v-if="item.contentType == 'Article' && item.images.length >= 3">
            <p class="protitle">{{item.title}}</p>
            <ul class="pictureItem">
              <li v-for="(imgItem , imgIndex) in item.images" :key='imgIndex'>
                <img :src="imgItem.url">
              </li>
            </ul>
            <div class="summary summary-H">
                <span>{{keyArr.name}}</span>
                <div class="time">
                  <span class="attention"><img src="/static/images/view.png">0</span>
                  <span>{{item.addTime}}</span>
                </div>
            </div>
          </div>
          <div class="proList2" v-if="item.contentType == 'Video'" @click="ondetail(item)">
            <p class="protitle">{{item.title}}</p>
            <div class="videoWrap">
              <div class="videoImg">
                <img :src="item.logoFile">
              </div>
              <!-- <video id="myVideo" :src="item.videoURL" binderror="videoErrorCallback" enable-danmu controls></video> -->
            </div>
            <div class="summary summary-H">
                <span>{{keyArr.name}}</span><span>28</span><span>26</span><span class="time">{{item.addTime}}</span>
            </div>
          </div>
        </div>    
      </div>


      <!-- 产品 -->
      <div class="listCon" v-if="tabActive == 2">
        <div class="proList">
          <div class="member member1">
            <p>植雅多效修复润发乳为何如此好卖？</p>
            <div class="summary">
              <span>产品</span><span>28</span><span>26</span><span class="time">2018-8-17</span>
            </div>
          </div>
          <div class="member member2"><img src="/static/images/swiperlist4.jpg" alt=""></div>
        </div>
        <div class="proList2">
          <p class="protitle">健康行业前景巨大，怎样快速又稳健的迈向成功？</p>
          <ul class="pictureItem">
            <li><img src="/static/images/swiperlist4.jpg" alt=""></li>
            <li><img src="/static/images/swiperlist4.jpg" alt=""></li>
            <li><img src="/static/images/swiperlist4.jpg" alt=""></li>
          </ul>
          <div class="summary summary-H">
              <span>健康</span><span>28</span><span>26</span><span class="time">2018-8-17</span>
          </div>
        </div>
        <div class="proList2">
          <p class="protitle">健康行业前景巨大，怎样快速又稳健的迈向成功？</p>
          <div class="videoWrap">
            <video id="" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" binderror="videoErrorCallback" enable-danmu controls></video>
          </div>
          <div class="summary summary-H">
              <span>健康</span><span>28</span><span>26</span><span class="time">2018-8-17</span>
          </div>
        </div>
      </div>
      <!-- 健康 -->
      <div class="listCon" v-if="tabActive == 3">
        <div class="proList">
          <div class="member member1">
            <p>植雅多效修复润发乳为何如此好卖？</p>
            <div class="summary">
              <span>产品</span><span>28</span><span>26</span><span class="time">2018-8-17</span>
            </div>
          </div>
          <div class="member member2"><img src="/static/images/swiperlist4.jpg" alt=""></div>
        </div>
        <div class="proList2">
          <p class="protitle">健康行业前景巨大，怎样快速又稳健的迈向成功？</p>
          <ul class="pictureItem">
            <li><img src="/static/images/swiperlist4.jpg" alt=""></li>
            <li><img src="/static/images/swiperlist4.jpg" alt=""></li>
            <li><img src="/static/images/swiperlist4.jpg" alt=""></li>
          </ul>
          <div class="summary summary-H">
              <span>健康</span><span>28</span><span>26</span><span class="time">2018-8-17</span>
          </div>
        </div>
      </div>
      <!-- 学堂 -->
      <div class="listCon" v-if="tabActive == 4">
        <div class="proList2">
          <p class="protitle">我要成为“东方女神”，护理有些秘诀？</p>
          <div class="videoWrap">
            <video id="" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" binderror="videoErrorCallback" enable-danmu controls></video>
          </div>
          <div class="summary summary-H">
              <span>#人际沟通</span><span>28</span><span>26</span><span class="time">2018-8-17</span>
          </div>
        </div>
        <div class="proList2">
          <p class="protitle">SALES七种被拒绝的情况</p>
          <div class="videoWrap">
            <video id="" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" binderror="videoErrorCallback" enable-danmu controls></video>
          </div>
          <div class="summary summary-H">
              <span>#销售技巧</span><span>28</span><span>26</span><span class="time">2018-8-17</span>
          </div>
        </div>
      </div>
      <!-- 专题 -->
      <div class="listCon" v-if="tabActive == 5">
        <!-- <topic></topic> -->
        <div class="special" v-for="(item , idxs) in topicData" :key="idxs">
          <p class="specialtitle">{{item.info}}</p>
          <img class="special-pic" :src="item.logoFile" @click="goToPdf">
          <div class="special-txt">
            <span>{{'&&' + item.hitCount}}</span><span class="rightCorner">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
// import store from '@/store/store'

export default {
  data () {
    return {
      tabActive:1,
      motto: 'Hello World，第一个小程序',
      motto2:'',
      userInfo: {},
      tabChangList:[{
        "ID":1,
        "name":"最新",
        "contentType":"Article",
        "contentGroupRela":"N"
        },
        {
          "ID":2,
          "name":"产品",
          "contentType":"Article",
          "contentGroupRela":"Y"
        },
        {
          "ID":3,
          "name":"健康",
          "contentType":"Article",
          "contentGroupRela":"Y"
        },
        {
          "ID":4,
          "name":"学堂",
          "contentType":"Article",
          "contentGroupRela":"Y"
        },
        {
          "ID":5,
          "name":"专题",
          "contentType":"Article",
          "contentGroupRela":"Y"
        },
        {
          "ID":6,
          "name":"产品",
          "contentType":"Article",
          "contentGroupRela":"Y"
        },
        {
          "ID":7,
          "name":"产品",
          "contentType":"Article",
          "contentGroupRela":"Y"
        },
        {
          "ID":8,
          "name":"产品",
          "contentType":"Article",
          "contentGroupRela":"Y"
        },
      ],
      topicData:[{
          ID:3524,
          name:"无限极微刊",
          info:"传播公司文化、品牌、动态，关注社会、行业、热点。让资讯有温度，有力度！",
          contentType:"Article",
          hitCount:9383,
          logoFile:"https://dummyimage.com/450x250"
      },{
          ID:3525,
          name:"晋升表彰",
          info:"回首过去，汗水孕育硕果；展望未来，拼搏铸就辉煌。在这激情飞扬、瑞雪纷飞的一月，我们齐聚一堂，共同见证“无限极2017年年终总结表彰大会”顺利、圆满召开。",
          contentType:"Article",
          hitCount:9332,
          logoFile:"https://dummyimage.com/450x250"
      }],
      initData:[]
    }
  },

  components: {
    card,
  },

  mounted() {
    setTimeout(()=> {
      this.initData = this.$_arr;
    })
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

  methods: {
    downFile(){
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    wx.openDocument({
      filePath: '/static/images/toutiao.pdf',
      success: function (res) {
        // console.log('File successfully opened')
      }
     })
    },
    onSearch(){
      const url = '../search/main'
      wx.navigateTo({url})
    },

    ondetail(item , tabActive){
        //跳转的url参数路径必须要转encodeURIComponent/decodeURIComponent,太长小程序会自动截取，无法解析字符串
        //深复制
        let items = JSON.parse(JSON.stringify(item))
        // encodeURIComponent当前对象的url
        let params = this.$util_func.encodeURI_url(
                items,
                ['logoFile','redirectURL','videoURL','fileURL','url','thumbnail'],
                encodeURIComponent
            )
        //跳转文章页面,传递参数
        if(item.contentType == 'Article') {
          this.goNextPage('../seeDetail/main?params=',params)
        }
        //跳转视频页面,传递参数
        if(item.contentType == 'Video') {
          this.goNextPage('../video/main?params=',params)
        }
    },
    goNextPage(src,items) {
      wx.navigateTo({url:src+ JSON.stringify(items)})
    },
    tabChoose(numAction , data){
      this.tabActive = numAction;
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    goToPdf(){
      let pdfurl = "static/pdf/《深入理解ES6》_sample.pdf"
      wx.navigateTo({url:'../pdf/main?pdfSrc='+ pdfurl})
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              // alert(666)
              // console.log('res',res)
              // console.log('store.$store.state.usreInfo',this.$store)
              this.$store.state.usreInfo = res.userInfo
              
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style>

.videoImg {
  border:1px solid #ccc;
}

page{
    height: 100%;
}
.containerWrap{
    width: 100%;
    height: 100%;
    background: #F5F6F8;
}
.phcolor{
    color:#b2b2b2;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.form-container{
  height:100%;
  display:block;
  background: #FC6154;
  padding-top: 5px;
  box-sizing: border-box;
}
.form-search{
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  /* border: 1px solid #ccc; */
  border-radius: 50rpx;
  font-size: 26rpx;
  margin:0 40rpx 30rpx 40rpx;
  height:60rpx;
  background:#fff;
  text-align:center;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

.tabScroll {
  position:relative;
}

::-webkit-scrollbar {
     display: none;
}

.tab-top {
  width: 100%;
  white-space: nowrap;
  background:#fff;
  position:fixed;
  z-index: 9999;
}
.tab{
  /* flex: 1; */
  display: inline-block;
  font-size: 36rpx;
  padding: 0 10px;
  height:80rpx;
  line-height:80rpx;
  color: #353535;
  /* font-weight: bold; */
  text-align: center;
  background: #fafafa;
}
.tab:last-child{
  padding-right: 120rpx;
}
.tabTxt {
  height:78rpx;
  padding:0 8px;
}

.active{
  color: #BC2826;
  border-bottom:2rpx solid #BC2826; 
}

.downArrow{
  width:90rpx;
  height:80rpx;
  background:#fafafa;
  position:absolute;
  right:0rpx;
  top:0rpx;
  z-index:9999;
  display:flex;
  justify-content: center;
  align-items:center; 
}

.downArrow .wb{
  width: 2rpx;
  height:50rpx;
  background:#979797;
  margin-right:20rpx;
}
.downArrow img{
  width:26px;
  height:15px;
  margin-top:8rpx;
}


.listCon{
  padding-top: 204rpx;
}
.proList{
  display: flex;
  padding: 0 30rpx;
  padding-bottom:30rpx;
  border-bottom:1rpx solid #ddd;
}
.proList .member1{
  height: 160rpx;
  margin-right: 20rpx;
  flex: 0 1 70%;
}
.proList .member2{
  flex: 0 1 30%;
}
.member1 p{
  font-size: 36rpx;
  /* font-weight: bold; */
  color: #333;
}
.summary{
  position: relative;
  margin-top: 32rpx;
}
.summary span{
  margin-right: 10rpx;
  font-size: 24rpx;
  color: #666;
}
.time{
  position: absolute;
  right: 0;
  bottom: 0;
}
.attention img{
  width: 24rpx;
  height: 15rpx;
  vertical-align: middle;
  margin-top:-6rpx;
  margin-right: 10rpx;
}
.member1 span{
  font-size: 24rpx;
  color: #666;
}
.member2 img{
  width: 100%;
  height: 100%;
}
.proList2{
  padding: 0 30rpx;
  padding-bottom:30rpx;
  border-bottom:1rpx solid #ddd;
}
.protitle{
  font-size:36rpx;
  /* font-weight:bold; */
  color:#333;
  padding:30rpx 0 28rpx 0;
}
.pictureItem{
  display: flex;
  justify-content: center;
}
.pictureItem li{
  height: 160rpx;
  flex:0 1 33.3%;
  margin-right:12rpx;
}
.pictureItem li:last-child{
  margin-right: 0;
}
.pictureItem img{
  width: 100%;
  height: 100%;
}
.summary-H{
  margin-top: 12rpx;
}
.videoWrap{
  text-align: center;
}
.videoWrap video{
  width: 100%;
}
.special {
  /* padding:0 30rpx; */
  margin-bottom:30rpx;
  background: #fff;
  position: relative;
}
.specialtitle{
  font-size:36rpx;
  color:#333;
  padding: 30rpx 30rpx 28rpx 30rpx;
}
.special .special-pic{
  width:750rpx;
  height: 345rpx;
  vertical-align:middle;
}
.special-txt{
  /* width: calc(100% - 40rpx); */
  height: 40px;
  line-height: 40px;
  /* background: #fff;
  opacity: .7;
  position: absolute;
  left: 20rpx;
  bottom: 0; */
}
.special-txt span{
  font-size: 13px;
  color: #333;
  padding-left: 30rpx;
}
.rightCorner{
  position: absolute;
  right: 30rpx;
}
</style>
