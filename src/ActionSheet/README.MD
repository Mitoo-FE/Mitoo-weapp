## ActtionSheet

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-action-sheet": "/components/ActionSheet/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-action-sheet visible="{{ visible }}" mask-closable="{{ false }}"></mit-action-sheet>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | false |
| visible | 用来显示action sheet | Boolean | false | false |
| mask-closable | 点击遮罩层是否可以关闭组件 | Boolean | false | false |
| options | 按钮标题列表	| Object | | ture |
| cancelButtonText | 取消按钮的文案	| String | 取消 | false |
| tapItem | 点击按钮的时间 | Function | | false |
