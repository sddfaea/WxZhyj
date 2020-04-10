// pages/faultManagement/faultManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId:'1'
  },
  dianji:function(e){
    var id = e.currentTarget.id;
    if(id=="faqi"){  //是否显示弹框
      var postid = e.currentTarget.dataset.postid;
      if(typeof(postid) == 'undefined' || postid == '1'){
        this.setData({
          display:'1',
          postId:'2'
        })
      }else{
        this.setData({
          display:'2',
          postId:'1'
        })
      }
    }else if(id == "qunliao"){
      wx.navigateTo({
        url: "../groupChat/groupChat",
      });
    }else if(id == "guzhang"){
      wx.navigateTo({
        url: "../faultClaim/faultClaim",
      });
    }
    
  },
  //页面进入加载
  loadInitData: function () {
    var that = this
    var currentPage = 0;
    var tips = "加载中";
    wx.showLoading({  //创建提示
      title: tips,
    })
    // 请封装自己的网络请求接口，这里作为示例就直接使用了wx.request.
    wx.request({
      url: 'http://192.168.0.107:8080/do',
      data: {
        currentPage:currentPage
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        var article = res.data; // 接口相应的json数据
        that.setData({
          articles: article,
          currentPage: currentPage
        })
      }
    })
  },
   /**
   * 加载下一页数据
   */
  loadMoreData: function () {
    var that = this
    var currentPage = that.data.currentPage; // 获取当前页码
    currentPage += 1; // 加载当前页面的下一页数据
    // 请封装自己的网络请求接口，这里作为示例就直接使用了wx.request.
    wx.request({
      url: 'http://192.168.0.107:8080/do',
      data: {
        currentPage:currentPage
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        var articles = res.data; // 接口相应的json数据
        // 将新一页的数据添加到原数据后面
        var originArticles = that.data.articles;
        var newArticles = originArticles.concat(articles);
        console.log(newArticles);
        that.setData({
          articles: newArticles,
          currentPage: currentPage
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (  options) {
    this.loadInitData();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMoreData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})