Page({
    onGotUserInfo: function(e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.userInfo)
        console.log(e.detail.rawData)
    },
})
