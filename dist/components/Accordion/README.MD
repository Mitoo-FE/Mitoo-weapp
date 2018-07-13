## Accordion

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-accordion": "/components/Accordion/index",
		"mit-accordion-panel": "/components/Accordion-Panel/index",
		"mit-panel": "/components/Panel/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-panel noBorder title="基本">
	<mit-accordion>
		<mit-accordion-panel>
			<view slot="title">
				Title 1
			</view>
			<view slot="content" class="content">
				A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
			</view>
		</mit-accordion-panel>
		<mit-accordion-panel>
			<view slot="title">
				Title 2
			</view>
			<view slot="content" class="content">
				A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
			</view>
		</mit-accordion-panel>
		<mit-accordion-panel>
			<view slot="title">
				Title 3
			</view>
			<view slot="content" class="content">
				A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
			</view>
		</mit-accordion-panel>
	</mit-accordion>
</mit-panel>
```

## API

### Accordion

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| isAccordion | 手风琴模式 | Boolean | | false |

### Accordion-Panel

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | slot | | false |
| content | 内容 | slot | | false |
