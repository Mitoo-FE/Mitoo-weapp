Page({
	data: {
		items: []
	},
	onReady() {
		const items = Array.from(new Array(9)).map((_val, i) => ({
			icon: 'category',
			text: 'name' + i,
		}));
		this.setData({
			items: items
		})
	}
})
