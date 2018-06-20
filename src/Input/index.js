Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        placeholder: {
            type: String,
            value: ''
        },
        label: {
            type: String,
            value: ''
        },
        number: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        value: {
            type: String,
            value: ''
        },
        radius: {
            type: Boolean,
            value: false
        },
        borderColor: {
            type: String,
            value: false
        }
    },
    data: {
    },
    methods: {
    }
})