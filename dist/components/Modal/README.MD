## Modal 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-modal": "/components/Modal/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-modal>
    ...
</mit-modal>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| visible | 是否可见 | Boolean |  | true  | true,false |
| title | 标题 | String |  | false | |
| vertical | 纵向按钮 | Boolean | false | false | |
| footer | 底部按钮 | Array | false | false |  |
| footer数组参数 |  |   |  |  |  |
| color | 底部按钮颜色 | String | false | false |  |
| text | 底部按钮文字 | String | false | false |  |
| event | 按钮上具体事件 | Function | false | false |  |
| closeable | 该按钮可否关闭对话框 | Boolean | false | false |  |



