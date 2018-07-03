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

			//
			// let currentData = evt.currentTarget.dataset,
	        //     index = currentData.index,
	        //     isExpanded = currentData.expanded;
			//
			// this.data.items[index].expanded = !!!isExpanded
			//
			// console.log(this.data.items);

			// this.setData({
			// 	items: this.data.items
			// })
		}
	},
	ready() {

	}

})
