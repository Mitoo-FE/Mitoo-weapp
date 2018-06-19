Component({
    externalClasses : ['mit-class'],
    properties: {
        active: {
            type: Boolean,
            value: false
        }
    },
    data: {
        brandColor: ''
    },
    relations: {
        '../Tabs/index': {
            type: 'parent',
            linked(target) {
                if (target.properties.brandColor) {
                    this.setData({
                        'brandColor':target.properties.brandColor
                    })
                }

            }
        }
    },
    methods: {
        change_tab(evt) {
            let parent = this.getRelationNodes('../Tabs/index');
            if (!parent.length) {
                console.error('Error tabs cell parent, Tabs-Cell does not has a Tabs parent')
            }
            else {
                let tab = parent[0];
                let nodes = tab.getRelationNodes('../Tabs-Cell/index');
                nodes.forEach((e)=> {
                    e.setData({
                        'active': false
                    })
                })
                this.setData({
                    'active': true
                })
            }
        }
    }
})
