Component({
    behaviors: [],
    data: {
        visible: false,
        content: ''
    },
    methods: {
		show(options) {

            const { duration = 1500, content } = options

            this.setData({
                visible: true,
                content: content
            })

            setTimeout(() => {
                this.hide()
            },duration)

		},
		hide() {
            this.setData({
                visible: false
            })
		},
        close() {
            this.setData({
                visible: false
            })
        }
    }

})
