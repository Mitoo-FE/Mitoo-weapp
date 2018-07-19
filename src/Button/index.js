Component({
  externalClasses : ['mit-class'],
  properties: {
    text: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: ''
    },
    circle: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'primary'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    full: {
      type: Boolean,
      value: false
    },
    bottom: {
      type: Boolean,
      value: false
    },
    openType: {
      type: String,
      value: ''
    },
    lang: {
      type: String,
      value: ''
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: {
      type: String,
      value: ''
    },
    sendMessagePath: {
      type: String,
      value: ''
    },
    sendMessageImg: {
      type: String,
      value: ''
    },
    showMessageCard: {
      type: String,
      value: ''
    },
    appParameter: {
      type: String,
      value: ''
    },
  },
  methods: {
    bindgetuserinfo: function(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },
    bindcontact: function(e) {
      this.triggerEvent('contact', e.detail);
    },
    bindgetphonenumber: function(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
    binderror: function(e) {
      this.triggerEvent('error', e.detail);
    },
    bindopensetting: function(e) {
      this.triggerEvent('opensetting', e.detail);
    },
    onTap: function() {
      this.triggerEvent('buttonTap', {bubbles: true, composed: true});
    },

  }
})
