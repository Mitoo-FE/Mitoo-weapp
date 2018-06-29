## Row, Col

## 使用指南
我们采用了24格栅格系统，将一个设计区域分割成24份，使用时需要row和col一起使用，具体示例如下。

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-row": "/components/Row/index",
		"mit-col": "/components/Col/index"
	}
}

```
### Step 2

在wxml文件里添加组件代码

```html
<mit-row mit-class="row">
	<mit-col mit-class="col" span="24">
		<view class="grid-content">span 24</view>
	</mit-col>
</mit-row>
```

## API

### row

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| gutter | 栅格间隔,单位rpx |  | | false |
| mit-class | 额外样式 | String |  | false |

### col
|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| span | 栅格占位格数, | Number | | true |
| offset | 栅格左侧的间隔格数 | Number |  | false |
