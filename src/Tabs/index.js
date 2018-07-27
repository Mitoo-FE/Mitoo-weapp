Component({
  externalClasses : ['mit-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    brandColor: {
      type: String,
      value: ''
    },
    scroll: {
      type: Boolean,
      value: false
    },
    isScroll: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },

  relations: {
    '../TabsCell/index': {
      type: 'child',
    }
  },
  ready() {
    let nodes = this.getRelationNodes('../TabsCell/index');
    if (nodes.length > 6) {
      this.setData({
        'isScroll': true
      })
    }
    for (let n of nodes) {
      if (n.properties.active) {
        let query = wx.createSelectorQuery().in(n);
        query.select('.mit-tabs-cell-active .mit-tabs-cell-bottom').boundingClientRect(function (rect) {
          for (let j of nodes) {
            j.setData({
              'activeLeft': rect.left
            });
          }
        }).exec();
        break;
      }
    }
  }
})
