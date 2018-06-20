const { Toptips } = require('../../components/Mixins/Toptips');

Page({
	showToptips() {
		Toptips({
			content: '这是一个通用样式'
		})
	},
	showSuccess() {
		Toptips({
			type: 'success',
			content: '这是一个通用样式'
		})
	},
	showWarn() {
		Toptips({
			type: 'warn',
			content: '这是一个通用样式'
		})
	},
	showError() {
		Toptips({
			type: 'error',
			content: '这是一个通用样式'
		})
	},
	showTimes() {
		Toptips({
			content: '延迟5秒钟关闭',
			duration: 5
		})
	}
})
