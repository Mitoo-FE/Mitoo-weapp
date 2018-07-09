Component({
    options: {
        multipleSlots: true
    },
    properties: {
        number: {
            type: Number,
            value: 0
        },
        flag: {
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value: ''
        }
    }
})
