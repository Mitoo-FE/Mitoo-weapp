## Grid

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-grid": "/components/Grid/index",
		"mit-grid-item": "/components/Grid-Item/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-grid columnNum="3">
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
</mit-grid>
```

## API

### Grid

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| columnNum | 标题 | String | | true |

### Grid-Item

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| icon | icon | slot | | false |
| title | title | slot | | false |
