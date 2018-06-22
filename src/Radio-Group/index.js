Component({
	externalClasses: ['mit-class'],
	relations: {
		'../Radio/index': {
			type: 'child',
			linked(target) {
				// console.log('target', target);
				// this.changeCurrent();
			},
			linkChanged(target) {
                console.log('target', target);
            },
		}
	},
	data: {
		checked: [],
		currentValue: ''
	},
	methods: {
		onChange(options) {

			const items = this.getRelationNodes('../Radio/index')

			items.forEach((item, index) => {
				item.changeSelected(item.data.value == options.value)

			})

			this.triggerEvent('change', options)
		}
	}
})
