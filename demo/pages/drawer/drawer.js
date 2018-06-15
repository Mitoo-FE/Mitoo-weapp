Page({
    data: {
        drawer1_show: false,
        drawer2_show: false
    },
    open_left: function(evt) {
        this.data.drawer1_show = !this.data.drawer1_show
        this.setData({drawer1_show:this.data.drawer1_show})
    },
    open_right: function(evt) {
        this.data.drawer2_show = !this.data.drawer2_show
        console.log(this.data.drawer2_show)
        this.setData({drawer2_show:this.data.drawer2_show})
    }
})
