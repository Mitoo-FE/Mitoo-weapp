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
            console.log('I do lll')
            // var myEventDetail = {} // detail对象，提供给事件监听函数
            // var myEventOption = {} // 触发事件的选项
            this.triggerEvent('buttonTap', {bubbles: true})
        }
    }
})
