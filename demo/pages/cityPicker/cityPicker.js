import cities from './address'

Page({
    data: {
        cities: cities,
        visible: false
    },
    showCityPicker () {
        this.setData({
            visible: true
        });
    },
    cancel () {
        this.setData({
            visible: false
        });
    },
    select (e) {
        console.log(e);
    }
})