Component({
    options: {
        multipleSlots: true
    },
    properties: {
        title: {
            type: String,
            value: ''
        },
        isLink: {
            type: Boolean,
            value: false
        },
        value: {
            type: String,
            value: ''
        },
        label: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        }
    },
    methods: {
        redirectTo: function() {
            wx.redirectTo({
                url: this.properties.url
            })
        }
    }
})