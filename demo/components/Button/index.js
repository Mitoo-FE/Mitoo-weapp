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
        }
    },
    methods: {
        onTap: function (evt) {
            this.triggerEvent('buttonTap', {bubbles: true, composed: true});
        }
    }
})
