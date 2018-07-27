const iconTypes = {
    'success': 'circle-empty-success',
    'fail': 'circle-empty-error',
    'network': 'grieved',
    'loading': 'loading'
};
Component({
  behaviors: [],
  data: {
      visible: false,
      content: ''
  },
  methods: {
		show(options) {

      const { duration = 1500, content, type } = options

      this.setData({
        visible: true,
        content: content,
        type: type && iconTypes[type] ? iconTypes[type] : '',
        size: type ? "60" : 0
      })

      setTimeout(() => {
          this.hide(options)
      },duration)

		},
		hide(options) {
      this.setData({
          visible: false
      })
      if (options.type === 'loading' ) {
          this.setData({
              visible: false
          })
      }else {
          this.setData({
              visible: false,
              type: 'circle'
          })
      }
		}
  }
})
