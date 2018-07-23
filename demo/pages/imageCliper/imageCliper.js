Page({
  data: {
    image: '',
    visible: false
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
