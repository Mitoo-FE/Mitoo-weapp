Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        },
        footer: {
            type: Array,
            value: [{
                color: '#000',
                text: '取消',
                closeable: true,
                event: ()=> {
                }
            },{
                color: '#000',
                text: '确定',
                closeable: true,
                event: ()=> {

                }
            }]
        },
        vertical: {
            type: Boolean,
            value: false
        }
    },
    data: {
    },
    methods: {
        handleClickEvent(e) {
            let target = e.currentTarget.dataset;
            if (target.item.closeable) {
                this.setData({
                    visible: false
                })
            }
            let index = target.index;
            this.properties.footer[index].event();
        },
        show() {
            this.setData({
                visible: true
            })
        }
    }
})