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
        },
        noBorder: {
            type: Boolean,
            value: false
        }
    },
    data: {
        lastItem: true
    },
    relations: {
        '../CellGroup/index': {
            type: 'parent',
            linked: function(target) {
                this.setData(this.data.lastItem)
            }
        }
    },
    methods: {
        redirectTo: function() {
            if (this.properties.url) {
                wx.navigateTo({
                    url: this.properties.url
                })
            }
        }
    }
})
