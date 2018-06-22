Component({
    properties: {
        text: {
            type: String,
            value: 0
        },
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
            this.triggerEvent($evt);
        }
    }
})