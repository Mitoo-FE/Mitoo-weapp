## Radio

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-radio": "/components/Radio/index",
		"mit-radio-group": "/components/Radio-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-radio-group bind:change="onradioChange">
	<mit-radio title="西瓜" value="watermelon"></mit-radio>
	<mit-radio title="香蕉" value="banana"></mit-radio>
	<mit-radio title="苹果" value="apple"></mit-radio>
	<mit-radio title="梨" value="pear"></mit-radio>
</mit-radio-group>
```

## API

### radio

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | radio的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### radio-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
