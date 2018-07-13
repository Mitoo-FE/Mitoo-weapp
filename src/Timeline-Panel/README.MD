## Timeline

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-panel": "/components/Panel/index",
		"mit-timeline": "/components/Timeline/index",
		"mit-timeline-panel": "/components/Timeline-Panel/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-timeline>
	<mit-timeline-panel showIcon>
		<view slot="content" class="content">
			<view class="title">v0.1.2</view>
			<view class="time">2016-04-17 12:00:00</view>
		</view>
	</mit-timeline-panel>
	<mit-timeline-panel icon="twitter">
		<view slot="content" class="content">
			<view class="title">v0.1.1</view>
			<view class="time">2018-07-03</view>
			<view class="">🐞 修复官网上的"展开全部"按钮不工作的问题</view>
			<view>🐞 修复 Transfer 组件的文本 "Not Found" 在 IE 或 Edge 浏览器上显示异常</view>
			<view>🐞 修复 Chrome 在缩放模式下，Card 组件的边框被标题的背景色覆盖。</view>
			<view>🐞 修复 Upload 组件中 uid 为0被误删除问题。</view>
			<view>改动了第5个组件的bug</view>
		</view>
	</mit-timeline-panel>
	<mit-timeline-panel>
		<view slot="content" class="content">
			<view class="title">项目立项</view>
			<view class="time">2016-04-17 12:00:00</view>
		</view>
	</mit-timeline-panel>
</mit-timeline>
```

## API

### Accordion

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|

### Accordion-Panel

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| showIcon | 是否显示图标，true会显示一个默认图标 | Boolean | | false |
| icon | 图标 | string | | false |
| content | 内容 | slot | | true |
