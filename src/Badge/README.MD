## Badge 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-badge": "/components/Badge/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-badge>
    ...
</mit-badge>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| number  | 徽章上的数字   |  Number  |   |   |  |
| flag | 是否加到其他组件上面 | Boolean | false | false | true, false |
| color | 自定义徽章颜色 | String | | | |

