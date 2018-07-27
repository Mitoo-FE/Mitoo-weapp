## ImageClipper 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-image-clipper": "/components/ImageClipper/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
  <mit-image-clipper bind:handleCut="handleCut" visible="{{visible}}" image="{{image}}"/>
```

## API

|参数 |说明 |类型 |默认值 |必须 |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| visible| 可见性   | Boolean  | false  | true  |
| image | 要裁剪图片地址，可以是微信提供的临时图片地址，或者base64 | String | false | false | 
| handleCut | 裁剪后的回调，可以获取回调中裁剪后图片的地址 | Function | false | false |
