Component({
    externalClasses : ['mit-class'],
    properties: {
        color: {
            type: String,
            value: ''
        },
        on: {
            type: Boolean,
            value: false
        },
        large: {
            type: Boolean,
            value: false
        },
        name: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        },
        circle: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        switch($evt) {
            if (!this.properties.disabled) {
                this.setData({
                    on: !this.properties.on
                })
            }
            this.triggerEvent('change', {
                'on': this.properties.on
            })
        },
    }

})
