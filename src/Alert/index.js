Component({
    properties: {
        text: {
            type: String,
            value: 0
        },
        warning: {
            type: Boolean,
            value: false
        },
        error: {
            type: Boolean,
            value: false
        },
        success: {
            type: Boolean,
            value: false
        },
        closeable: {
            type: Boolean,
            value: false
        }
    },
    data: {
        visible: true
    },
    methods: {
        close() {
            this.setData({
                visible: false
            })
        }
    }
})
