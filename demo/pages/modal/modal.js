Page({
    data: {
        defaultVisible: false,
        defaultFooter : [{
            color: '#333',
            text: '取消',
            closeable: true,
            event: function(){
                console.log('点击了取消');
                console.log('sdf')
            }
        },{
            color: '#333',
            text: '确定',
            closeable: false,
            event: function(){
                console.log('点击了确定');
            }
        }],
        defaultNoTitleVisible: false,
        defaultNoTitleFooter: [{
            color: '#333',
            text: '取消',
            closeable: true,
            event: function(){
                console.log('点击了取消');
                console.log('sdf')
            }
        },{
            color: '#333',
            text: '确定',
            closeable: false,
            event: function(){
                console.log('点击了确定');
            }
        }],
        MultipleButtonVisible: false,
        MultipleButtonFooter: [{
            color: '#333',
            text: '取消',
            closeable: true,
            event: function(){
                console.log('点击了取消');
                console.log('sdf')
            }
        },{
            color: 'red',
            text: '付款',
            event: function() {
                console.log('点击了付款按钮')
            }
        },{
            color: '#333',
            text: '确定',
            closeable: false,
            event: function(){
                console.log('点击了确定');
            }
        }],
        VerticalButtonVisible: false,
        VerticalButtonFooter: [{
            color: '#333',
            text: '取消',
            closeable: true,
            event: function(){
                console.log('点击了取消');
                console.log('sdf')
            }
        },{
            color: '#333',
            text: '确定',
            event: function() {
                console.log('点击了确定按钮')
            }
        }]
    },
    default_modal(evt) {
        this.setData({
            defaultVisible: true
        })
    },
    default_no_title_modal(evt) {
        this.setData({
            defaultNoTitleVisible: true
        })
    },
    multiple_button_modal(evt) {
        this.setData({
            MultipleButtonVisible: true
        })
    },
    vertical_button_modal(evt) {
        this.setData({
            VerticalButtonVisible: true
        })
    }
})
