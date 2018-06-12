Component({
	externalClasses: ['mit-class'],
	relations: {
		'../Row/index': {
			type: 'parent'
		}
	},
	properties: {
		span: {
			value: 0,
			type: Number
		},
		offset: {
			value: 0,
			type: Number
		}
	},
	data: {
		gutter: 0
	},
	ready() {
		const nodes = this.getRelationNodes('../Row/index')
		const row = nodes[0]
		if (row.data.gutter && row.data.gutter > 0) {
			this.setData({
				gutter: Math.floor(row.data.gutter/2)
			})
		}
	}
})
