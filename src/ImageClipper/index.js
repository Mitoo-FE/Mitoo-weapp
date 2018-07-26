function distance (x1, x2, y1, y2) {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
}
Component({
  externalClasses : ['mit-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    image: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Boolean,
      default: true
    }
  },
  data: {
    cutAreaStyl: '',
    cutImageTop: 0,
    cutImageLeft: 0,
    windowWidth: 0,
    windowHeight: 0,
    imageHeight: 0,
    imageWidth: 0,
    baseX: 0,
    baseY: 0,
    baseBackImgX: 0,
    baseBackImgY: 0,
    baseWidth: 0,
    baseHeight: 0,
    baseTargetX: 0,
    baseTargetY: 0,
    baseTargetBackImgX: 0,
    baseTargetBackImgY: 0,
    backImgTop: 0,
    toolTouched: false,
    baseFingerDistance: 0,
    scale: 1,
    inertia: 1, // upside 1 else 0
    fingerDistanceLast: 0,
    initScale: 1,
    baseScale: 1,
    initTop: 0,
    inited: false,
    transformOrigin: 'center'
  },
  methods: {
    init () {
      this.data.imageHeight = 0;
      this.data.imageWidth = 0;
      this.data.baseX = 0;
      this.data.baseY = 0;
      this.data.scale = 1;
      this.data.baseScale = 1;
      this.data.fingerDistanceLast = 0;
      this.data.backImgTop = 0;
      this.data.cutImageLeft = 0;
      this.data.cutImageTop = 0;
    },
    generateTmpImage (x, y, width, height, destWidth, destHeight) {
      wx.canvasToTempFilePath({
        x: x,
        y: y,
        width: width,
        height: height,
        destWidth: destWidth,
        destHeight: destHeight,
        canvasId: 'imageCanvas',
        success: (res) => {
          this.triggerEvent('handleCut', res.tempFilePath);
          this.setData({
            visible: false
          })
        },
        fail: (res) => {
          console.log(res)
          this.setData({
            visible: false
          })
        }
      }, this)
    },
    cancel () {
      this.init()
      this.setData({
        visible: false
      })
    },
    complete () {
      let ctx = wx.createCanvasContext('imageCanvas', this);
      let top, left, width, height;
      if (this.data.imageHeight > this.data.imageWidth) {
        let realtop = parseFloat(this.data.cutImageTop) / this.data.windowWidth * this.data.imageWidth;
        // reset zero (0, 0)
        let realheight = this.data.windowWidth / this.data.imageWidth * this.data.imageHeight;
        let scaledZeroTop = (realheight * this.data.scale - realheight) / 2;
        let scaledZeroLeft = (this.data.windowWidth * this.data.scale - this.data.windowWidth) / 2;
        top = (parseFloat(this.data.cutImageTop) - scaledZeroTop) / this.data.windowWidth * this.data.imageWidth / this.data.scale;
        left = (parseFloat(this.data.cutImageLeft) - scaledZeroLeft) / this.data.windowWidth * this.data.imageWidth / this.data.scale;
        ctx.drawImage(this.properties.image, -left, -top , this.data.imageWidth / this.data.scale, this.data.imageWidth / this.data.scale, 0, 0, this.data.windowWidth, this.data.windowWidth);
        ctx.draw(false, () => {
          this.generateTmpImage(0, 0, this.data.windowWidth , this.data.windowWidth, this.data.windowWidth, this.data.windowWidth)
        })
      }
      else {
        // reset zero (0, 0)
        let realwidth = this.data.windowWidth / this.data.imageHeight * this.data.imageWidth;
        let scaledZeroTop = (this.data.windowWidth * this.data.scale / this.data.baseScale - this.data.windowWidth / this.data.baseScale) / 2;
        let scaledZeroLeft = (realwidth * this.data.scale / this.data.baseScale - realwidth / this.data.baseScale) / 2;
        top = (parseFloat(this.data.cutImageTop) - scaledZeroTop) / this.data.windowWidth * this.data.imageHeight / this.data.scale * this.data.baseScale;
        left = (parseFloat(this.data.cutImageLeft) - scaledZeroLeft) / this.data.windowWidth * this.data.imageHeight / this.data.scale * this.data.baseScale;
        ctx.drawImage(this.properties.image, -left, -top , this.data.imageHeight * this.data.baseScale / this.data.scale, this.data.imageHeight * this.data.baseScale / this.data.scale, 0, 0, this.data.windowWidth, this.data.windowWidth);
        ctx.draw(false, () => {
          this.generateTmpImage(0, 0, this.data.windowWidth , this.data.windowWidth, this.data.windowWidth, this.data.windowWidth)
        })
      }
      this.init();
    },
    getCutAreaStyl () {
      let _this = this;
      if (this.properties.limit) {
        wx.getSystemInfo({
          success: function(data) {
            _this.setData({
              windowWidth: data.windowWidth,
              windowHeight: data.windowHeight,
              cutAreaStyl: `height: ${data.windowWidth}px; top: ${(data.windowHeight - data.windowWidth)/2}px`,
              backImgTop: data.windowHeight / 2 + 'px',
              backImgLeft: 0
            })
          }
        })
      }
      else {
        _this.setData({
          cutAreaStyl: `height: 100%`
        })
      }
    },
    toolsTouchStart ($evt) {
      this.toolTouched = true;
      if ($evt.changedTouches.length === 1) {
        this.setData({
          baseX: $evt.changedTouches[0].clientX,
          baseY: $evt.changedTouches[0].clientY,
          baseTargetX: this.data.cutImageLeft,
          baseTargetY: this.data.cutImageTop,
          baseTargetBackImgX: this.data.backImgLeft,
          baseTargetBackImgY: this.data.backImgTop
        })
      }
      else if ($evt.changedTouches.length === 2) {
        let fingerDistance = distance($evt.changedTouches[0].clientX, $evt.changedTouches[1].clientX, $evt.changedTouches[0].clientY, $evt.changedTouches[1].clientY)
        this.setData({
          baseFingerDistance: fingerDistance
        })
        this.setData({
          fingerDistanceLast: fingerDistance
        })
      }
    },
    touchMoveEvent($evt) {
      let changeX = $evt.changedTouches[0].clientX - this.data.baseX;
      let changeY = $evt.changedTouches[0].clientY - this.data.baseY;
      let targetX = parseFloat(this.data.baseTargetX) + changeX;
      let targetY = parseFloat(this.data.baseTargetY) + changeY;
      let backImgTargetX = parseFloat(this.data.baseTargetBackImgX) + changeX;
      let backImgTargetY = parseFloat(this.data.baseTargetBackImgY) + changeY;
      if (this.data.imageHeight > this.data.imageWidth) {
        let realHeight = this.data.windowWidth / this.data.imageWidth * this.data.imageHeight;
        let imageMovableHeight = realHeight * (this.data.scale - 1) / 2;
        let imageMovableHeightBottom = (realHeight- this.data.windowWidth) * this.data.scale;
        let imageMovableWidth = this.data.windowWidth * (this.data.scale - 1) / 2;
        if (targetX > imageMovableWidth) {
          targetX = imageMovableWidth;
        }
        if (targetX < -imageMovableWidth) {
          targetX = -imageMovableWidth;
        }
        this.setData({
          cutImageLeft: targetX + 'px',
          backImgLeft: backImgTargetX + 'px'
        });

        if (targetY > imageMovableHeight) {
          targetY = imageMovableHeight;
        }
        if (targetY < - imageMovableHeightBottom) {
          targetY = - imageMovableHeightBottom;
        }
        this.setData({
          cutImageTop: targetY + 'px',
          backImgTop: backImgTargetY + 'px',
        })
      }
      else {
        let realWidth = this.data.windowWidth / this.data.imageHeight * this.data.imageWidth / this.data.baseScale;
        let realHeight = this.data.windowWidth / this.data.baseScale;
        let imageMovableWidth = (realWidth * this.data.scale - this.data.windowWidth) / 2;
        let imageMovableWidthBottom = (realWidth * this.data.scale - this.data.windowWidth) / 2 ;
        let imageMovableHeight = (realHeight * this.data.scale - this.data.windowWidth) / 2;
        console.log(imageMovableHeight + parseFloat(this.data.initTop))
        if (targetY > imageMovableHeight + parseFloat(this.data.initTop)) {
          targetY = imageMovableHeight + parseFloat(this.data.initTop);
        }
        if (targetY <= - imageMovableHeight + parseFloat(this.data.initTop)) {
          targetY = - imageMovableHeight + parseFloat(this.data.initTop);
        }
        this.setData({
          cutImageTop: targetY + 'px',
          backImgTop: backImgTargetY + 'px'
        });
        if (targetX > imageMovableWidth) {
          targetX = imageMovableWidth;
        }
        if (targetX <= - imageMovableWidthBottom) {
          targetX = - imageMovableWidthBottom;
        }
        this.setData({
          cutImageLeft: targetX + 'px',
          backImgLeft: backImgTargetX+ 'px',
        })
      }
    },
    toolsTouchMove ($evt) {
      if (this.toolTouched) {
        if ($evt.changedTouches.length === 1) {
          this.touchMoveEvent($evt)
        } else if ($evt.changedTouches.length === 2) {
          let fingerDistance = distance($evt.changedTouches[0].clientX, $evt.changedTouches[1].clientX, $evt.changedTouches[0].clientY, $evt.changedTouches[1].clientY)
          if (fingerDistance > this.data.fingerDistanceLast) {
            if (this.data.inertia === 0) {
              this.setData({
                inertia: 1,
                baseFingerDistance: 0
              })
            }

          }
          else {
            if (this.data.inertia === 1) {
              this.setData({
                inertia: 0,
                baseFingerDistance: 0
              })
            }
          }
          if (this.data.baseFingerDistance === 0) {
            let fingerDistance = distance($evt.changedTouches[0].clientX, $evt.changedTouches[1].clientX, $evt.changedTouches[0].clientY, $evt.changedTouches[1].clientY)
            this.setData({
              baseFingerDistance: fingerDistance,
              fingerDistanceLast: fingerDistance
            })
          }
          this.setData({
            fingerDistanceLast: fingerDistance
          });
          let changeFingerDistance = fingerDistance - this.data.baseFingerDistance;
          let scale = changeFingerDistance / this.data.windowWidth;
          console.log(this.data.scale + scale)
          if (this.data.scale + scale <= this.data.initScale) {
            this.setData({
              scale: this.data.initScale
            })
          }
          else {
            this.setData({
              scale: this.data.scale + scale,
            })
          }
        }
      }
    },
    toolsTouchEnd ($evt) {
      this.toolTouched = false;
      this.setData({
        baseFingerDistance: 0
      })
    },
    bindCutAreaLoad ($evt) {
      this.setData({
        imageWidth: $evt.detail.width,
        imageHeight: $evt.detail.height,
        cutImageTop: `${-((this.data.windowWidth / $evt.detail.width *  $evt.detail.height)  - this.data.windowWidth) / 2}px`,
        cutImageLeft: `${-((this.data.windowWidth / $evt.detail.width *  $evt.detail.width)  - this.data.windowWidth) / 2}px`
      })
      if (!this.inited && this.data.imageWidth > this.data.imageHeight) {
        this.setData({
          baseScale: this.data.imageWidth / this.data.imageHeight,
          initScale: this.data.imageWidth / this.data.imageHeight,
          initTop: `${-((this.data.windowWidth / $evt.detail.width *  $evt.detail.height)  - this.data.windowWidth) / 2}px`,
          scale: this.data.imageWidth / this.data.imageHeight,
          inited: true
        })
      }
    }
  },
  ready() {
    this.getCutAreaStyl();

  }
})
