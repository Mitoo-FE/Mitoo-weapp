Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        brandColor: {
            type: String,
            value: ''
        },
        scroll: {
            type: Boolean,
            value: false
        },
        isScroll: {
            type: Boolean,
            value: false
        }
    },
    data: {
    },

    relations: {
        '../TabsCell/index': {
            type: 'child'
        }
    },
    ready() {
        let nodes = this.getRelationNodes('../TabsCell/index');
        if (nodes.length > 6) {
            this.setData({
                'isScroll': true
            })
        }
    },
    methods: {

    }
})