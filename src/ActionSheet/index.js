Component({
    behaviors: [],
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        title: {
            type: String,
            value: ''
        },
        options: {
            type: Object,
        },
        cancelButtonText: {
            type: String
        }
    },
    methods: {
        close() {
            this.setData({
                visible: false
            })
        },
        cancelButton() {
            this.close()
        },
        tapMask(evt) {
            const role = evt.target.dataset.role
            if (role == 'mask' && this.data.maskClosable) {
                this.close()
            }
        },
        tapItem(evt) {
            const index = evt.currentTarget.dataset.index;
            const options = {
                index
            }
            this.triggerEvent('tapItem', options, { bubbles: false, composed: false })
        }
    }

})
