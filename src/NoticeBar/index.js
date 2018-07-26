Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        closeable: {
            type: Boolean,
            value: false
        },
        scrollable: {
            type: Boolean,
            value: false
        },
        text: {
            type: String,
            value: ''
        },
        icon: {
            type: Boolean,
            value: false
        },
        speed: {
            type: Number,
            value: 40
        },
        multiple: {
            type: Boolean,
            value: false
        },
        delay: {
            type: Number,
            value: 0
        }
    },
    data: {
        visible: true,
        contentWidth: 0,
        wrapWidth: 0,
        animation: null,
        iniAnimation: null,
        duration: 0,
        animationData: null,
        timer: null
    },
    ready() {
        this.init();
    },
    detached() {
      const { timer } = this.data;
      timer && clearTimeout(timer);
    },
    methods: {
        close() {
            this.setData({
                'visible': false
            })
        },
        init() {
            wx.createSelectorQuery()
            .in(this)
            .select('.mit-notice-bar-text')
            .boundingClientRect((rect) => {
                this.setData({
                    contentWidth: rect.width
                })
                wx.createSelectorQuery()
                    .in(this)
                    .select('.mit-notice-bar-wrap')
                    .boundingClientRect((rect) => {
                        const { contentWidth, speed, delay, scrollable } = this.data;
                        const duration = contentWidth / speed * 1000;
                        const wrapWidth = rect.width;

                        if (scrollable && wrapWidth < contentWidth) {
                            const animation = wx.createAnimation({
                              duration,
                              timeingFunction: 'linear',
                              delay
                            });

                            const initAnimation = wx.createAnimation({
                                duration: 0,
                                timeingFunction: 'linear'
                            });

                            this.setData({
                                wrapWidth,
                                animation,
                                duration,
                                initAnimation
                            }, () => {
                                this.scroll();
                            })
                        }

                    }).exec();

            }).exec();
        },
        scroll() {
            const { wrapWidth, animation, duration, speed, initAnimation } = this.data

            console.log('animation', animation);

            const animationData = animation.translateX(-(duration * speed) / 1000).step();
            initAnimation.translateX(wrapWidth).step();

            this.setData({
                animationData: initAnimation.export()
            })

            setTimeout(() => {
                this.setData({
                    animationData: animationData.export()
                })
            }, 100)

            const timer = setTimeout(() => {
                this.scroll();
            }, duration);

        }

    }
})
