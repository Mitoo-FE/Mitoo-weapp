Component({
  externalClasses : ['mit-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    visible: {
      type: Boolean,
      value: true
    },
    direction: {
      type: String,
      value: 'bottom'
    },
    height: {
      type: [String, Number]
    },
    width: {
      type: [String, Number]
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    maskVisible: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    tapMask(evt) {
      const role = evt.target.dataset.role
      this.setData({
        visible: false
      })
    }
  }
})
