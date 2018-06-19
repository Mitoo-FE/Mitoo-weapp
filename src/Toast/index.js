Component({
    behaviors: [],
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
		type: {
			type: String,
		},
		content: {
			type: String
		},
        duration: {
            type: Number,
            value: 2000
        }
    },
    methods: {
		show() {
            console.log('show show');
		},
		hide() {
            setTimeout( () => {
                this.visible = false
            },duration)
		},
        close() {
            this.setData({
                visible: false
            })
        },
    }

})
