Component({
    externalClasses : ['mit-class'],
    properties: {
        active: {
            type: Boolean,
            value: false
        }
    },
    data: {
        brandColor: '',
        translation: 0,
        nodeLeft: 0
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
    ready() {
        let _self = this;
        let query = wx.createSelectorQuery().in(_self);
        let active_node = query.select('.mit-tabs-cell');
        active_node.boundingClientRect((rect) => {
            _self.setData({
                'nodeLeft': rect.left
            });
        }).exec();
    },
    methods: {
        change_tab(evt) {
            let parent = this.getRelationNodes('../Tabs/index');
            if (!parent.length) {
                console.error('Error tabs cell parent, Tabs-Cell does not has a Tabs parent')
            }
            else {
                let tab = parent[0];
                let nodes = tab.getRelationNodes('../TabsCell/index');
                nodes.forEach((e)=> {
                    if (e.properties.active) {
                        e.setData({
                            'active': false
                        });
                    }
                });

                this.setData({
                    'active': true,
                    'translation': 0
                });
            }
        },
        get_active($evt) {
            console.log($evt)
        }
    }
})
