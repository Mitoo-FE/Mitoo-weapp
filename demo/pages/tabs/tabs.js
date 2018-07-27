Page({
  data: {
    tabs1: [{
      index: '1',
      active: false,
      text: '选项1'
    }, {
      index: '2',
      active: true,
      text: '选项2'
    }, {
      index: '3',
      active: false,
      text: '选项3'
    }]
  },
  onChangeTab ($evt) {
    console.log($evt.target.dataset)
  }
})
