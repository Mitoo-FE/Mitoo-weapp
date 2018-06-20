
let timer = null;

Component({
	data: {
        visible: false,
        content: ''
    },
	methods: {
		show(options) {

			clearTimeout(timer)

            const { duration = 1.5, content, type = 'default' } = options

			console.log(options);

            this.setData({
                visible: true,
                content: content,
				type: type
            })

            timer = setTimeout(() => {
                this.hide()
            },duration * 1000)

		},
		hide() {
            this.setData({
                visible: false
            })
		}
    }
})
