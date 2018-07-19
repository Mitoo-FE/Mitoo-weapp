Component({
  externalClasses : ['mit-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    position: {
      type: String,
      value: ''
    },
    visible: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    drawer_mask_tap: function($evt) {
      this.setData({
        visible: false
      })
      this.triggerEvent('drawerHidden', $evt);
    }
  }
})
