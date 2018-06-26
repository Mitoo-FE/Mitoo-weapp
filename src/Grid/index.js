Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
	relations: {
		'../Grid-Item/index': {
			type: 'child',
		}
	},
    properties: {
        columnNum: {
            type: Number,
            value: 4
        },
        visible: {
            type: Boolean,
            value: false
        },
		items: {
			type: Object
		}
    },
    methods: {

    },
	ready() {

		const items = this.getRelationNodes('../Grid-Item/index')
		let rowCount = Math.ceil(items.length / this.data.columnNum);

	}
})
