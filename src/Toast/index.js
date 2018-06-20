const iconTypes = {
    'success': 'circle-empty-success',
    'fail': 'circle-empty-error',
    'network': 'grieved'
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
                this.hide()
            },duration)

		},
		hide() {
            this.setData({
                visible: false,
                type: 'circle'
            })
		}
    }

})
