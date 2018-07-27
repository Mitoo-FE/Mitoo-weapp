## Panel

与其他组件配合使用

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-tag": "/components/Tag/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-tag borderColor="#EC0D33">标签一</mit-tag>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| borderColor  | tag边框颜色   |  String  | false  |  true |  |
| backgroundColor | tag背景颜色 | String | false | false | true, false|
| size | 大小 | Number | false | false | |
| selectable | 可选择性 | Boolean | false | false | |
| select | 选中回调 | Function | false | false | |
