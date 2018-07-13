## Badge 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-badge": "/components/CityPicker/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-city-picker>
    ...
</mit-city-picker>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|
| visible  | 城市选择器的展示状态   |  Boolean | false   | true  |
| cities | 城市列表数据 | Object |  | true |
| cancel | 取消选择回调 | Function | | |
| select | 选择城市回调 | Function | | |

##

    cities 数据下载地址 https://www.mitooui.com/download/cities.json
    
    cancel 为右上角点击按钮事件回调
    
    select 为点选城市的回调，选择城市的id在detail中

