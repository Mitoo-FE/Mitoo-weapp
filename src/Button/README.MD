## ActtionSheet

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-button": "/components/Button/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-button>
    ...
</mit-button>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| size | 大小 | Var | default | false | 'small', 'large', 'default'|
| circle | 是否圆按钮 | Var | default | false | true, false |
