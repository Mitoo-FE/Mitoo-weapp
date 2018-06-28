Component({
    externalClasses : ['mit-class'],
    properties: {
        active: {
            type: Boolean,
            value: false
        },
        activeLeft: {
            type: Number,
            value: 0
        }
    },
    data: {
        brandColor: '',
        translation: 0,
        activeLeft: 0
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
        let query = wx.createSelectorQuery().in(this);
        query.select('.mit-tabs-cell-bottom').boundingClientRect((rect) => {
            this.setData({
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
                for (let e of nodes) {
                    if (e.properties.active) {
                        e.setData({
                            'active': false
                        });
                    }
                }
                this.setData({
                    'active': true
                });
                for (let e of nodes) {
                    e.setData({
                        'activeLeft': this.data.nodeLeft
                    });
                }
            }
        }
    },
    get_active($evt) {
        console.log($evt)
    }
})
