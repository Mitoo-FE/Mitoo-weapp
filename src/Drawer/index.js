Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        position: {
            type: String,
            value: ''
        },
        show: {
            type: Boolean,
            value: false
        }
    },
})