Component({
  properties: {
    borderColor: {
      type: String,
      value: ''
    },
    backgroundColor: {
      type: String,
      value: ''
    },
    selectable: {
      type: Boolean,
      value: false
    },
    size: {
      type: Number,
      value: 0
    }
  },
  methods: {
    select($evt) {
      if (this.properties.selectable && this.properties.borderColor && this.properties.backgroundColor) {
        let borderColor = this.properties.borderColor;
        let backgroundColor = this.properties.backgroundColor;
        this.setData({
          borderColor: backgroundColor,
          backgroundColor: borderColor
        })
      }
      this.triggerEvent('select', $evt);
    }
  }
})
