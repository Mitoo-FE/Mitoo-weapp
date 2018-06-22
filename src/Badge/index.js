Component({
    options: {
        multipleSlots: true
    },
    properties: {
        number: {
            type: Number,
            value: 0
        },
        slot: {
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value: ''
        }
    }
})