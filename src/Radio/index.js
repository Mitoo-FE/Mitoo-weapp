Component({
	externalClasses: ['mit-class'],
	relations: {
		'../Radio-Group/index': {
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
			default: '#108ee9',
			disabled: '#c3c3c3'
		},
		checked: false
	},
	ready() {
		if (!this.data.value) {
			this.data.value = this.data.title
		}
	},
	methods: {
		onTap() {

			if (this.data.disabled || this.data.checked) {
				return
			}

			const parent = this.getRelationNodes('../Radio-Group/index')[0];

			parent.onChange({checked: !this.data.checked, value: this.data.value})

		},
		changeSelected(value) {

			this.setData({
				checked: value
			})
		}
	}
})
