Component({
	relations: {
		'../Col/index': {
			type: 'child',
		}
	},
	methods: {
		_getChildrens() {
			const nodes = this.getRelationNodes('../Col/index')
		}
	},
	ready() {
		console.log('childrens', this._getChildrens());
	}
})
