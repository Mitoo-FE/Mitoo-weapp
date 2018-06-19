## NoticeBar 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-notice-bar": "/components/NoticeBar/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-notice-bar>
    ...
</mit-notice-bar>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| text | 通知文字 | String |  | false  | |
| closeable | 是否可关闭 | Boolean | false | false | |
| transform | 是否可开启跑马灯 | Boolean | false | false | |

