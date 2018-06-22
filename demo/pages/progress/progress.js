Page({
    data: {
        progress: 10,
        percent: 10
    },
    increase() {
        if (this.data.progress + this.data.percent <= 100) {
            this.setData({
                progress: this.data.progress + this.data.percent
            })
        }
    },
    decrease() {
        if (this.data.progress - this.data.percent >= 0) {
            this.setData({
                progress: this.data.progress - this.data.percent
            })
        }
    }
})