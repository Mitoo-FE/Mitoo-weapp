const _data = [
  '😀 😁 😂 🤣 😃 😄 ',
  '🙂 🤗 🤩 🤔 🤨 😐 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
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
