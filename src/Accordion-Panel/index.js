Component({
	externalClasses: ['mit-class'],
	options: {
		multipleSlots: true,
	},
	properties: {

    },
	relations: {
		'../Accordion/index': {
			type: 'parent'
		}
	},
	data: {
		expanded : false
	},
	methods: {
		itemTap(evt) {

			const parent = this.getRelationNodes('../Accordion/index')[0];

			parent.onItemTap(this);

		}
	},
	ready() {

	}

})
