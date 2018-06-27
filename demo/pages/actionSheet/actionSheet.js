const { Toptips } = require('../../components/Mixins/Toptips');
Page({
	data() {
		return {
			visible: false
		}
	},
	showActionSheet() {
		console.log('showActionSheet');
		this.setData({
			visible: true,
			title: '标题',
			options: [{
				title: '操作一'
			},
			{
				title: '操作二'
			},{
				title: '操作三'
			}]
		})
	},
	onTapItem(evt) {
		const index = evt.detail.index
		Toptips({
			content: '点击第' + (index + 1) +'个按钮'
		})
	}
})
