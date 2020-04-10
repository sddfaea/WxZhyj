// pages/groupChat/communications.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postid:'1',
    display: 'true'
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  send:function(e){
    this.setData({
      display:'',
      msg:e.detail.value,
      value: ""
    })
  },
  inputFocus:function(event){
    var that = this;
    var height ;
    const query = wx.createSelectorQuery()
    query.select('#zy').boundingClientRect()
    query.select('#xy').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res){
      height = res["0"].height + 'rpx';
      that.setData({
        height: height
      })
    })
  },
  inputBlur : function(){
    this.setData({
      height : '93%'
    })
  },
  dianj:function(event){
    var id = event.currentTarget.id;
    var postid = event.currentTarget.dataset.postid;
    if(id == 'zhankai' && postid == "1" ){
        this.setData({
          height : '65%',
          postid : '2'
        })
    }else if(id == 'zy' || postid == "2"){
      this.setData({
        height : '93%',
        postid : '1'
      })
    }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})