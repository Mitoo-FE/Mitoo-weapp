## Input 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-input": "/components/Input/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-input>
    ...
</mit-input>
```


## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| placeholder | 输入框内描述文字 | String |  | true  | |
| label | 左边文字 | String |  | false | |
| number | 是否使用数字键盘输入 | Boolean | false | false | |
| disabled | 禁用 | Boolean | false | false |  |
| value | 默认文字 | String |  | false |  |
| radius | 是否圆角 | Boolean | false | false |  |
| borderColor | 自选边框颜色 | Boolean | false | false |  |
| lengthLimit | 长度限制 | Number | false | false |  |
| confirmType | 键盘右下角完成文字 | String | "done"  |  |  |
| focus | 自动获取焦点 | Boolean | false | false |  |


