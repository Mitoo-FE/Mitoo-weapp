Component({
    properties: {
        progress: {
            type: Number,
            value: 0
        },
        percent: {
            type: Number,
            value: 0
        },
        color: {
            type: String,
            value: ''
        },
        flow: {
            type: Boolean,
            value: false
        },
        hiddenProgressNumber: {
            type: Boolean,
            value: false
        }
    },
    data: {

    },
    methods: {
        increase() {
            if (this.properties.progress + this.properties.percent < 100) {
                this.setData({
                    progress: this.properties.progress + this.properties.percent
                })
            }
        },
        decrease() {
            if (this.properties.progress - this.properties.percent > 0) {
                this.setData({
                    progress: this.properties.progress - this.properties.percent
                })
            }
        }
    }
})