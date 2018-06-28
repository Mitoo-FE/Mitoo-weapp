Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        title: {
            type: String,
            value: ''
        },
        withoutBorder: {
            type: Boolean,
            value: false
        },
        noBackground: {
            type: Boolean,
            value: false
        }
    }
})
