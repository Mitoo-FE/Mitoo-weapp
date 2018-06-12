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
        }
    },
    data: {
        lastItem: true
    },
    relations: {
        '../Cell-Group/index': {
            type: 'parent',
            linked: function(target) {
                this.setData(this.data.lastItem)
            }
        }


    },
    methods: {
        redirectTo: function() {
            if (this.properties.url) {
                wx.redirectTo({
                    url: this.properties.url
                })
            }
        }
    }
})