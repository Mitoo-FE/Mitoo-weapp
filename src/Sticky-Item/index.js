Component({
  externalClasses : ['mit-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../Sticky/index': {
      type: 'parent',
      linked(target) {
    		// console.log('target', target);
    		// this.changeCurrent();
    	},
    	linkChanged(target) {
        // console.log('target', target);
      },
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
    refresh() {
      const query = wx.createSelectorQuery().in(this);
      query.select('.mit-sticky-item').boundingClientRect((res) => {
        // console.log(res);
      }).exec()
    },
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
