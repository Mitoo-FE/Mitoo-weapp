Page({
  data: {
    popupDefault: false,
    popupTop: false,
    popupBottom: false,
    popupLeft: false,
    popupRight: false,
    popupBottomFull: false,
    popupLeftFull: false,
    popupMul1: false,
    popupMul2: false,
    popupMaskDisabled: false,
    popupMaskVisible: false,
    list: []
  },
  popupDefault() {
    this.setData({
      popupDefault: true
    })
  },
  popupTop() {
    this.setData({
      popupTop: true
    })
  },
  popupBottom() {
    this.setData({
      popupBottom: true
    })
  },
  popupLeft() {
    this.setData({
      popupLeft: true
    })
  },
  popupRight() {
    this.setData({
      popupRight: true
    })
  },
  popupBottomFull() {
    this.setData({
      popupBottomFull: true
    })
  },
  popupLeftFull() {
    this.setData({
      popupLeftFull: true
    })
  },
  popupMul1() {
    this.setData({
      popupMul1: true
    })
  },
  popupMul2() {
    this.setData({
      popupMul2: true
    })
  },
  popupMaskDisabled() {
    this.setData({
      popupMaskDisabled: true
    })
  },
  popupMaskVisible() {
    this.setData({
      popupMaskVisible: true
    })
  },
  closePopup() {
    this.setData({
      popupBottomFull: false,
      popupLeftFull: false,
      popupDefault: false,
      popupTop: false,
      popupBottom: false,
      popupLeft: false,
      popupRight: false,
      popupMul1: false,
      popupMul2: false,
      popupMaskDisabled: false,
      popupMaskVisible: false
    })
  },
  closeMulPopup1() {
    this.setData({
      popupMul1: false
    })
  },
  closeMulPopup2() {
    this.setData({
      popupMul2: false
    })
  },
  onReady() {
    const list = [];
    for (let i = 0; i < 15; i++) {
      list.push(i)
    }
    this.setData({
      list: list
    })
  }
})
