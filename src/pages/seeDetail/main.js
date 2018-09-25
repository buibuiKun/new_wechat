import Vue from 'vue'
import App from './seeDetail'

const app = new Vue(App)
app.$mount()


export default {
    config: {
      navigationBarTitleText: '查看启动日志1233'
    },
    showShareMenu() {
        wx.showShareMenu();
        console.log("显示了当前页面的转发按钮");
    },
    hideShareMenu() {
        wx.hideShareMenu();
        console.log("隐藏了当前页面的转发按钮");
    },
    onShareAppMessage(res) {
        if (res.from === 'button') {
        console.log("来自页面内转发按钮");
        console.log(res.target);
        }
        
        else {
        console.log("来自右上角转发菜单")
        }

        return {
        title: '妹子图片',
        path: '/pages/share/share?id=123',
        imageUrl: "/images/1.jpg",
        success: (res) => {
            console.log("转发成功", res);
        },

        fail: (res) => {
            console.log("转发失败", res);
        }
      }
    },
  }