## Cell

与Cell-Group配合使用 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-cell": "/components/Cell/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-cell>
    ...
</mit-cell>
```

|参数 |说明 |类型 |默认值 |必须 |可选参数 |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| title  |  标题   | String |   | false  |   |
| label  |  辅助文字   | String  | false  | true  |    |
| isLink |  是否是链接   | Boolean  | false  | false  |    |
| url |  链接   | String  | false  | false  |    |

注意，在title为空是可以选择使用slot的方式进行渲染，可以在中间添加自己的代码

