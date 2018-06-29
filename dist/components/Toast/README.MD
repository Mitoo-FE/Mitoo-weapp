## Toast

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-toast": "/components/Toast/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-button size="large" type="default" bindtap="showBase">基础样式</mit-button>
<mit-button size="large" type="default" bindtap="showSuccess">成功！</mit-button>
<mit-button size="large" type="default" bindtap="showFail">失败！</mit-button>
<mit-button size="large" type="default" bindtap="showNetwork">网络连接失败！</mit-button>
<mit-button size="large" type="default" bindtap="showLoading">加载中</mit-button>
<mit-toast id="toast"></mit-toast>
```

### Step 3

在js文件中使用

```js
const { Toast } = require('../../components/Mixins/Toast');

# 详细代码使用请查看demo
Page({
	showBase() {
		Toast({
			content: '普通的tosat提示！'
		})
	}
})
```

## API

### Toast

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| content | toast显示内容 | String | | true |
| type | toast类型 可选值为 success / fail / network / loading | String |  | false |
