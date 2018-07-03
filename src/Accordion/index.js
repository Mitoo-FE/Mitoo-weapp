Component({
	externalClasses: ['mit-class'],
	properties: {
        items: {
            type: Array
        }
    },
	data: {
		expanded : false
	},
	methods: {
		itemTap(evt) {

			console.log('evt', evt);

			let currentData = evt.currentTarget.dataset,
	            index = currentData.index,
	            isExpanded = currentData.expanded;

			this.data.items[index].expanded = !!!isExpanded

			console.log(this.data.items);

			this.setData({
				items: this.data.items
			})
		}
	},
	ready() {
		console.log(this.data);
	}

})
