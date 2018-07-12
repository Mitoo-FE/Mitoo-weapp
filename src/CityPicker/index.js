Component({
    options: {
        multipleSlots: true
    },
    properties: {
        placeholder: {
            type: String,
            value: ''
        },
        cities: {
            type: Object,
            value: {}
        }
    },
    data: {
        pinyin: [],
        firstChar: [],
        scrollTop: 0,
        searchFlag: false,
        searchCityList: []
    },
    methods: {
        goChar: function($evt) {
            let char = $evt.currentTarget.dataset.item;
            let view = `#view_${char}`;
            let promise = new Promise((resolve, reject) => {
                wx.createSelectorQuery().selectViewport().scrollOffset((res) => {
                    resolve(res);
                }).exec()
            });
            promise.then((scroll) => {
                let query = wx.createSelectorQuery().in(this);
                query.select(view).boundingClientRect((res) => {
                    this.setData({
                        scrollTop: scroll.scrollTop + res.top
                    })
                    wx.pageScrollTo({
                        scrollTop: this.data.scrollTop
                    });
                }).exec();
            })
        },
        goTop: function($evt) {
            wx.pageScrollTo({
                scrollTop: 0
            });
        },
        search: function($evt) {
            let value = $evt.detail.value;
            if (value.length) {
                let searchCityList = [];
                let cities = this.properties.cities.data.cityList;
                for (let i of cities) {
                    if (i.pinyin.length >= value.length) {
                        if (i.pinyin.substring(0, value.length) === value) {
                            searchCityList.push(i)
                        }
                    }
                    if (i.name.length >= value.length) {
                        if (i.name.substring(0, value.length) === value) {
                            searchCityList.push(i)
                        }
                    }
                }
                this.setData({
                    searchCityList: searchCityList
                })
                this.setData({
                    searchFlag: true
                })
            }
            else {
                this.setData({
                    searchFlag: false
                })
            }
        },
        selectItem ($evt) {
            console.log($evt.currentTarget.dataset.index)
            this.triggerEvent('select', $evt.currentTarget.dataset.index)
        },
        cancel ($evt) {
            this.triggerEvent('cancel', $evt)
        }
    },
    attached() {
        let pinyin = {};
        for (let i of this.properties.cities.data.cityList) {
            if (i.pinyin[0].toUpperCase() in pinyin === false) {
                pinyin[i.pinyin[0].toUpperCase()] = [];
            }
            pinyin[i.pinyin[0].toUpperCase()].push(i);
        }
        let pinyinSorted = [];
        let firstChar = [];
        for (let i = 65; i < 65 + 26 ; i ++) {
            if (pinyin[String.fromCharCode(i)] !== undefined) {
                firstChar.push(String.fromCharCode(i));
                let item = pinyin[String.fromCharCode(i)].sort((a, b) => a.rank < b.rank);
                pinyinSorted.push({
                    charCode: String.fromCharCode(i),
                    array: item
                });
            }
        }
        // console.log(pinyinSorted)
        this.setData({
            pinyin: pinyinSorted,
            firstChar: firstChar
        })
        wx.getLocation({
            type: 'wgs84',
            success: (res) => {
                wx.request({
                    url: `https://api.map.baidu.com/geocoder/v2/?location=${res.latitude},${res.longitude}&output=json&pois=1&ak=T7mfZA5WUbqCbxx80aP8ZXaNVS919Paw`,
                    dataType: 'json',
                    header: {
                        'content-type': 'application/json'
                    },
                    method: 'GET',
                    success: (s) => {
                        this.setData({
                            city: s.data.result.addressComponent.city
                        })
                    }
                })
            }
        })
    }
})
