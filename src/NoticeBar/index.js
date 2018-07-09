Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        closeable: {
            type: Boolean,
            value: false
        },
        transform: {
            type: Boolean,
            value: false
        },
        text: {
            type: String,
            value: ''
        },
        icon: {
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
                'visible': false
            })
        }
    }
})
