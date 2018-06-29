## Alert 

提示框组件

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-alert": "/components/Alert/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-alert>
    ...
</mit-alert>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| text  | 内容   |  String  |   |   |  |
| warning | 警告样式提示框 | Boolean | false | false | true, false |
| error | 错误样式提示框 | Boolean | false | false | true, false |
| success | 成功样式提示框 | Boolean | false | false | true, false |
| closeable | 可关闭提示框 | Boolean | false | false | true, false |
