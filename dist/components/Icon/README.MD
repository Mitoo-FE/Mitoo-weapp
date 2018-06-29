## Icon

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-icon": "/components/Icon/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-icon type="category" size="30" color="red" mit-class="fontClass"></mit-icon>
```

## API

### Grid

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| type | 名字 | String | | true |
| size | 字体大小，单位rpx | Number | | false |
| color | 字体颜色 | String | | false |
| mit-class | 字体样式类 | String | | false |

##### <font color="#660000">注：如果给了size和color属性，mit-class不会覆盖size和color样式。</font>
