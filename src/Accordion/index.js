Component({
	externalClasses: ['mit-class'],
	properties: {
		isAccordion: {
			type: Boolean
		}
    },
	relations: {
		'../Accordion-Panel/index': {
			type: 'child'
		}
	},
	data: {
		expanded : false
	},
	methods: {
		onItemTap(that) {

			if (this.data.isAccordion) {

				const items = this.getRelationNodes('../Accordion-Panel/index');

				if (that.data.expanded) {
					that.setData({
						expanded: !!!that.data.expanded
					})
				}else {
					items.forEach((item, index) => {
						item.setData({
							expanded: false
						})
					})
					that.setData({
						expanded: !!!that.data.expanded
					})
				}

			}else {
				that.setData({
					expanded: !!!that.data.expanded
				})
			}
		}
	},
	ready() {

	}

})
