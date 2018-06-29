const { Toast } = require('../../components/Mixins/Toast');

Page({
	data() {
		return {
			visible1: false,
			duration: 3000
		}
	},
	methods: {

	},
	showBase() {
		Toast({
			content: '普通的tosat提示！'
		})
	},
	showSuccess() {
		Toast({
			content: '支付成功!',
			type: 'success'
		})
	},
	showFail() {
		Toast({
			content: '请求错误!',
			type: 'fail'
		})
	},
	showNetwork() {
		Toast({
			content: '网络连接失败!',
			type: 'network'
		})
	},
	showLoading() {
		Toast({
			content: '加载中，请稍后',
			type: 'loading'
		})
	}
})
