Component({
	externalClasses: ['mit-class'],
	relations: {
		'../Checkbox/index': {
			type: 'child',
			linked(target) {
				// console.log('linked', target);
			},
			linkChanged(target) {
				console.log('linkChanged', target);
			}
		}
	},
	data: {
		checked: [],
		currentValue: []
	},
	methods: {
		onChange(options) {
			const _this = this;
			const items = this.getRelationNodes('../Checkbox/index')
			this.data.currentValue = [];
			items.forEach((item, index) => {
				if (item.data.checked) {
					_this.data.currentValue.push(item.data.value)
				}
			})
			this.triggerEvent('change', this.data.currentValue, { bubbles: true, composed: true })
		}
	}
})
