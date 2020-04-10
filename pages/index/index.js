//index.js
//获取应用实例
const app = getApp()

Page({
    tz:function(event){
      const ver = wx.getSystemInfoSync().SDKVersion
      console.log(ver);
      var id = event.currentTarget.id;
      var ur = '';
      if(id == "gzgl"){
        ur = '../faultManagement/faultManagement' //故障管理
      }else if (id == "ycgl"){
          ur = '../InspectionControl/InspectionControl'  //运检管修
      }else if(id == "quexian"){
          ur = '../my/my'     //运检管修
      }else if(id = "zhonglan"){
          ur = '../overview/overview'   //总览
      }
      wx.navigateTo({
        url: ur,
      });
    },
  onPageScroll:function(e){
    if(e.scrollTop<0){
        wx.pageScrollTo({
          scrollTop: 0
        })
    }
  },
  data: {
  },
  //用户点击允许后获取用户信息
  onGotUserInfo: function (e) {
    if (e.detail.userInfo) {
      console.log(e.detail.userInfo)
      //获取用户的授权信息，放到本地缓存中
      wx.setStorage({
        key:"zhyj_user_login",
        data:1
      })
       this.logingo(e);
    } else {
      console.log("失败");
    }
    this.setData({
      mou_box:'none'
    })
  },
  onLoad:function(e){
      var that = this;
      wx.getStorage({
        key: 'zhyj_user_login',
        success (res) {
          console.log(res.data);
          if(res.data == 1){
            that.setData({mou_box : 'none'})
          }
        }
      })
       this.logingo(e);
  },
  logingo:function(e){
    var that = this;
    var avatarUrl = "";
    var city = "";
    var country = "";
    var gender = "";
    var language = "";
    var nickName = "";
    var province = "";
    if(typeof(e.detail)!= "undefined"){
      avatarUrl = e.detail.userInfo.avatarUrl;
      city = e.detail.userInfo.city;
      country = e.detail.userInfo.country;
      gender = e.detail.userInfo.gender;
      language = e.detail.userInfo.language;
      nickName = e.detail.userInfo.nickName;
      province = e.detail.userInfo.province;
    }
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://192.168.0.107:8080/login/go',
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            data: {
              code: res.code,
              avatarUrl:avatarUrl,
              city:city,
              country:country,
              gender:gender,
              language:language,
              nickName:nickName,
              province:province
            },
            success (res) {
              var type = res.data.data.insert;
              var show;
              if(type == false){
                show = "block"
              }else{
                show = "none"
              }
              that.setData({
                mou_box:show
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})