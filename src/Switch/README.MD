## Switch

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-switch": "/components/Switch/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-switch name="sw1"/>
```


## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| name | name | String |  | true  | |
| large | 大小 | Boolean |  | false | |
| color | 自定义颜色 | String | false | false | |
| disabled | 禁用 | Boolean | false | false |  |


| 事件名称 | 说明 |
|:-------:|:---:|
| change  | 绑定变化时触发 |


