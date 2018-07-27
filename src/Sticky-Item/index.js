Component({
  externalClasses : ['mit-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../Sticky/index': {
      type: 'parent'
    }
	},
  properties: {
    index: {
      type: [Number, String]
    }
  },
  data: {
    itemRect: {},
    parent: null
  },
  methods: {
    getRect() {
      let promise = new Promise((resolve, reject) => {
        const query = wx.createSelectorQuery().in(this);
        query.select('.mit-sticky-item').boundingClientRect((rect) => {
          this.setData({
            itemRect: rect
          })
          resolve();
        }).exec()
      })
      return promise
    },
    getItemTitle() {
      return this.data.index
    }
  },
  ready() {
    this.parent = this.getRelationNodes('../Sticky/index')
  }
})
