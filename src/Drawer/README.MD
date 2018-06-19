## Drawer

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-drawer": "/components/Drawer/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-drawer>
    ...
</mit-drawer>
```

## API

|参数 | 说明 | 类型 | 默认值 | 必须 | 可选参数 |
|:--:|:--:|:--:|:--:|:--:|:--:|
| position  | 出现的位置    | String |   | true  | 'left','right'  |
| visible   | 可见性   | Boolean  | false  | true  | true, false   |
