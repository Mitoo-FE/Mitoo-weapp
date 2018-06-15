Page({
	data() {
		return {
			visible: false
		}
	},
	showActionSheet() {
		console.log('showActionSheet');
		this.setData({
			visible: true
		})
	}
})
