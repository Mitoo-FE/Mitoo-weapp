Component({
	externalClasses: ['mit-class'],
	relations: {
		'../Col/index': {
			type: 'child',
		}
	},
	properties: {
		gutter: {
			value: 0,
			type: Number
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
