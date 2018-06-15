Component({
    behaviors: [],
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
    },
    methods: {
        close() {
            this.setData({
                visible: false
            })
        }
    }
})
