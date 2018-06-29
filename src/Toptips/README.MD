## toptips

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-toptips": "/components/Toptips/index"
	}
}

```
### Step 2

在wxml文件里添加组件代码

```html
<mit-button size="large" type="default" bindtap="showToptips">通用样式</mit-button>
<mit-button size="large" type="default" bindtap="showSuccess">success</mit-button>
<mit-button size="large" type="default" bindtap="showWarn">warn</mit-button>
<mit-button size="large" type="default" bindtap="showError">error</mit-button>
<mit-button size="large" type="default" bindtap="showTimes">自定义事件时间</mit-button>
<mit-toptips id="toptips"></mit-toptips>
```

### Step 3

在js文件中使用

```js
const { Toptips } = require('../../components/Mixins/Toptips');

# 详细代码使用请查看demo
Page({
	showBase() {
		Toptips({
			content: '这是一个通用样式'
		})
	}
})
```

## API

### toptips

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| content | toptips显示内容 | String | | true |
| type | toptips类型 可选值为 success / warn / error | String |  | false |
| duration | 延迟时间，单位秒 | Number | 1.5（秒） | false |
