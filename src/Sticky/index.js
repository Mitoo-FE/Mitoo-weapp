Component({
  externalClasses : ['mit-class'],
  options: {
      multipleSlots: true
  },
  relations: {
		'../Sticky-Item/index': {
			type: 'child'
		}
	},
  properties: {
    pos: {
      type: Number,
      value: 0,
      observer: 'computeCurrentSticky'
    },
  },
  data: {
    fixedShow: true
  },
  created() {
    this.fixedHeight = 0;
    this.items = []
    this.positions = []
    this.heights = []
  },
  ready() {
    this._getAllItems();
    this.refresh()
  },
  methods: {
    _getAllItems() {
      const items = this.getRelationNodes('../Sticky-Item/index')
      this.items = items;
    },
    refresh() {
      this.items.forEach((item, index) => {
        item.refresh()
      })
      this._calculateHeight()
      this.computeCurrentSticky()
    },
    _calculateHeight() {
      const items = this.items;
      const _this = this;
      items.forEach((item, index) => {
        item.getRect().then(() => {
          const { top, height } = item.data.itemRect
          _this.positions[index] = top;
          _this.heights[index] = height;
        });
      })
      const query = wx.createSelectorQuery().in(this);
      query.select('.mit-sticky-fixed').boundingClientRect((rect) => {
        this.fixedHeight = rect.top;
      }).exec()
    },
    computeCurrentSticky(scrollY) {
      const positions = this.positions
      const heights = this.heights
      const checkTop = true
      const len = positions.length
      for (let i = len - 1; i >= 0; i--) {
        const isLast = i === len - 1
        const nextTop = isLast ? scrollY : positions[i + 1]
        let top
        let bottom
        if (checkTop) {
          top = positions[i]
          bottom = top + heights[i]
        }else {
          top = positions[i] + heights[i]
          bottom = top
        }
        const max = Math.max(bottom, nextTop)
        if (scrollY >=top && scrollY <= max) {
          this.currentIndex = i
          this.handleFixedShow(this.currentIndex)
          this.currentDiff = scrollY - top
          const diff = nextTop - scrollY
          if (diff >= 0 && !isLast) {
            this.diff = diff - (this.fixedHeight || heights[i])
            this.handelTrickyTitle(i)
            this.setAnimationStyle(this.diff)
          }else {
            this.diff = 0
            this.setAnimationStyle(0)
          }
          return
        }
      }

      this.currentIndex = -1
      this.currentDiff = 0
      this.handleFixedShow(this.currentIndex)
    },
    setAnimationStyle(diff) {
      if (diff >= 0) {
        diff = 0
      }
      diff = Math.ceil(diff)
      if (this._fixedTop === diff) {
        return
      }
      this._fixedTop = diff
      this.setData({
        AnimationStyle: `translate3d(0, ${diff}px, 0)`
      })
    },
    handleFixedShow(index) {
      const targetEle = this.items[index]
      this.setData({
        fixedShow: !!targetEle
      })
    },
    handelTrickyTitle(index) {
      const title = this.items[index].getItemTitle()
      this.triggerEvent('change', {title: title}, { bubbles: true, composed: true})
    }
  }
})
