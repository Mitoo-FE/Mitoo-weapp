Component({
	externalClasses: ['mit-class'],
	relations: {
		'../Checkbox-Group/index': {
			type: 'parent'
		}
	},
	properties: {
		title: {
			type: String,
			value: ''
		},
		checked: {
			type: Boolean,
			value: false
		},
		disabled: {
			type: Boolean,
			value: false
		},
		value: {
			type: String,
			value: ''
		}
	},
	data: {
		colors : {
			checked: '#108ee9',
			uncheck: '#c3c3c3',
			disabled: '#c3c3c3'
		},
		checked: false
	},
	methods: {
		onTap() {

			if (this.data.disabled) {
				return
			}

			const parent = this.getRelationNodes('../Checkbox-Group/index')[0];

			this.setData({
				checked: !this.data.checked
			})

			parent.onChange({checked: !this.data.checked, value: this.data.value})



		}
	}

})
