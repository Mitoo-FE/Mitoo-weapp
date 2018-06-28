Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        border: {
            type: Boolean,
            value: false
        },
        size: {
            type: [String, Number],
            value: 'default'
        },
        src: {
            type: String,
            value: ''
        },
        noCircle: {
            type: Boolean,
            value: false
        }
    },
    data: {

    },
    methods: {

    }
})
