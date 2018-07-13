## Panel

与其他组件配合使用

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-panel": "/components/Panel/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-panel>
    ...
</mit-panel>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| title  | 标题   |  Boolean  | false  |  true |  |
| noBorder | 不带边框 | Boolean | false | false | true, false|
