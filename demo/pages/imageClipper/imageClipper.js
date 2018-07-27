Page({
  data: {
    image: '',
    visible: false,
    avatar: '/assets/image/avatar.png'
  },
  handleCut ($evt) {
    this.setData({
      avatar: $evt.detail
    })
  },
  uploadImage () {
    let _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: 'original',
      success (path) {
        _this.setData({
          visible: true,
          image: path.tempFilePaths[0]
        });
      }
    })
  }
})
