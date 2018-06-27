## Checkbox

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-checkbox": "/components/Checkbox/index",
		"mit-checkbox-group": "/components/Checkbox-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-checkbox-group bind:change="onCheckboxChange">
	<mit-checkbox title="西瓜" value="watermelon"></mit-checkbox>
	<mit-checkbox title="香蕉" value="banana"></mit-checkbox>
	<mit-checkbox title="苹果" value="apple"></mit-checkbox>
	<mit-checkbox title="梨" value="pear"></mit-checkbox>
</mit-checkbox-group>
```

## API

### Checkbox

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | checkbox的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### Checkbox-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
