Page({
  data: {
    image: '',
    visible: false
  },
  handleCut ($evt) {
    console.log($evt)
    wx.previewImage({
      current: 0,
      urls: [$evt.detail]
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
