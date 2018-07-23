const _data = [
  'ActionSheet 动作面板',
  'Toast 轻提示',
  'Modal 对话框',
  'Toptips 顶部提示',
  'Input 输入框',
  'Radio 单选',
  'Checkbox 复选',
  'Switch 开关',
]
Page({
  data: {
    scrollY: 0,
    items: _data.concat(),
    title: ""
  },
  scroll: function(e) {
    console.log(e);
    const scrollTop = e.detail.scrollTop;
    this.setData({
      scrollY: scrollTop
    })
  },
  changeTitle(data) {
    const title = data.detail.title
    this.setData({
      title: title
    })
  }
})
