Component({
    properties: {
        text: {
            type: String,
            value: ''
        },
        size: {
            type: String,
            value: ''
        },
        circle: {
            type: String,
            value: ''
        },
        type: {
            type: String,
            value: 'primary'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        full: {
            type: Boolean,
            value: false
        },
        bottom: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        onTap: function (evt) {
            this.triggerEvent('buttonTap', {bubbles: true, composed: true});
        }
    }
})
