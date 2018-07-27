const { Toast } = require('../../components/Mixins/Toast');

Page({
  select ($evt) {
    Toast({
      content: $evt.target.dataset.index + '被点击'
    })
  }
})
