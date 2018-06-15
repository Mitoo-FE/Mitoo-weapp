Page({
    data: {
        visible1: false,
        visible2: false,
    },
    open_left: function(evt) {
        this.data.visible1 = true;
        this.setData({visible1:this.data.visible1})
    },
    open_right: function(evt) {
        this.data.visible2 = true;
        this.setData({visible2:this.data.visible2})
    }
})
