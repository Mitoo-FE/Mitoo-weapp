## Avatar 

头像组件

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-avatar": "/components/Avatar/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-avtar>
    ...
</mit-avatar>
```

|参数 |说明 |类型 |默认值 |必须 |可选参数 |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| src  |  头像图片地址   | String |   | false  |   |
| size  |  头像大小   | String  | 'default'  | true  | 'large', 'small', 'default', number   |
| noCircle |  是否圆头像   | Boolean  | false  | false  |    |
| border |  是否有边框   | Boolean  | false  | false  |    |

