Component({
	externalClasses: ['mit-class'],
	options: {
		multipleSlots: true,
	},
	properties: {
		showIcon: {
			type: Boolean
		},
		icon: {
			type: String
		}
	},
	relations: {
		'../Timeline/index': {
			type: 'parent'
		}
	},
	data: {
		isFirst: false,
		isLast: false
	},
	methods: {

	},
	ready() {
		const parent = this.getRelationNodes('../Timeline/index')[0]
		console.log('parent', parent);
		parent.setIndex();
	}

})
