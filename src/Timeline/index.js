Component({
	relations: {
		'../Timeline-Panel/index': {
			type: 'child'
		}
	},
	methods: {
		setIndex() {
			const nodes = this.getRelationNodes("../Timeline-Panel/index")
			const len = nodes.length;
			for (let i = 0; i < nodes.length; i++) {
				if (i === 0) {
					nodes[i].setData({
						isFirst: true
					})
				}else if (i === len -1) {
					nodes[i].setData({
						isLast: true
					})
				}
			}
		}
	}
})
