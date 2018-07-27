Component({
  externalClasses : ['mit-class'],
	options: {
		multipleSlots: true
	},
	relations: {
		'../Grid/index': {
			type: 'parent'
		}
	},
	data: {
		rowWidth: '25%',
		columnNum: 4
	},
	ready() {
		const parent = this.getRelationNodes('../Grid/index')[0]
		const rowWidth = `${100 / parent.data.columnNum}%`;
		this.setData({
			rowWidth: rowWidth
		})
	}
})
