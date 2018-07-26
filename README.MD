<p align="center">
    <img alt="项目logo" width="50%" src="http://ozcvsuh4t.bkt.clouddn.com/mitoo-weapp-logo.png">
</p>
<p align="center">小程序 UI 组件库</p>

### 介绍


[Mitoo-weapp]是一款基于小程序的ui组件库，旨在解决ios和android上展示的差异化，提升开发者的开发效率，把更多的精力放到业务上。


<p align="center" style="margin: 40px 0;">
    <img alt="qrCode" width="30%" src="http://ozcvsuh4t.bkt.clouddn.com/mitoo-weapp-qrcode.jpg">
</p>


### 开始使用

###### 在开始使用Mitoo-weapp 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)的相关文档

### 下载项目到工程

	npm install --save mitoo-weapp


## 预览

* 在 Mitoo-weapp 根目录下运行

``` bash
# 下载工程到本地
git clone https://github.com/Mitoo-FE/Mitoo-weapp.git
```

* 打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，把 mitoo-weapp/demo 目录添加进去就可以预览示例demo了。




## 具体组件



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
## ActtionSheet

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-action-sheet": "/components/ActionSheet/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-action-sheet visible="{{ visible }}" mask-closable="{{ false }}"></mit-action-sheet>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | false |
| visible | 用来显示action sheet | Boolean | false | false |
| mask-closable | 点击遮罩层是否可以关闭组件 | Boolean | false | false |
| options | 按钮标题列表	| Object | | ture |
| cancelButtonText | 取消按钮的文案	| String | 取消 | false |
| tapItem | 点击按钮的时间 | Function | | false |
## Alert 

提示框组件

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-alert": "/components/Alert/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-alert>
    ...
</mit-alert>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| text  | 内容   |  String  |   |   |  |
| warning | 警告样式提示框 | Boolean | false | false | true, false |
| error | 错误样式提示框 | Boolean | false | false | true, false |
| success | 成功样式提示框 | Boolean | false | false | true, false |
| closeable | 可关闭提示框 | Boolean | false | false | true, false |
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

## Button

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

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 | 生效时机 |
|:-----------: |:---------------:| :-------------:| :--------: | :--------:|:-----:| :----:|
| size | 大小 | String | default | false | 'small', 'large', 'default'|
| circle | 是否圆按钮 | Boolean | default | false | true, false |
| text   | 按钮文字  | String  |  |  false  |   | 
| type  | 按钮类型 | String | false | 'primary' | 'primary', 'info', 'default', 'error', 'warning' |
| disabled   | 是否禁用  | Boolean  | false |  false  | true, false  |
| full   | 是否通栏  | Boolean  | false |  false  | true, false  |
| bottom   | 是否为底部通栏按钮  | Boolean  | false |  false  | true, false  |
| openType   | 微信开放能力  | String  |  |    |  
| sessionFrom   | 会话来源  | String  |  |    |  | openType="contact" |
| sendMessageTitle   | 会话内消息卡片标题  | String  |  |    | |  openType="contact" |
| sendMessagePath   | 会话内消息卡片点击跳转小程序路径  | String  |  |   | | openType="contact" |
| sendMessageImg   | 会话内消息卡片图片  | String  |  |   | |  openType="contact" |
| showMessageCard   | 显示会话内消息卡片  | String  |  |  |  |  openType="contact" |
| appParameter   | 打开 APP 时，向 APP 传递的参数  | String  |  |    | | openType="launchApp" |
| bindcontact   | 客服消息回调  | Function  |  |    | | openType="contact" |
| bindgetphonenumber   | 获取用户手机号回调 | Function  |  |    | | openType="getPhoneNumber" |
| binderror   | 当使用开放能力时，发生错误的回调  | Function  |  |    | | openType="launchApp" |
| bindopensetting   |在打开授权设置页后回调  | Function  |  |    | | openType="openSetting" |

## Card

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-card": "/components/Card/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-card>
    ...
</mit-card>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| full | 是否通栏 | Boolean | false | false |
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

## Cell-Group

与Cell配合使用

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-cell-group": "/components/Cell-Group/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-cell-group>
    ...
</mit-cell-group>
```
## Checkbox

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-checkbox": "/components/Checkbox/index",
		"mit-checkbox-group": "/components/Checkbox-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-checkbox-group bind:change="onCheckboxChange">
	<mit-checkbox title="西瓜" value="watermelon"></mit-checkbox>
	<mit-checkbox title="香蕉" value="banana"></mit-checkbox>
	<mit-checkbox title="苹果" value="apple"></mit-checkbox>
	<mit-checkbox title="梨" value="pear"></mit-checkbox>
</mit-checkbox-group>
```

## API

### Checkbox

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | checkbox的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### Checkbox-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
## Checkbox

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-checkbox": "/components/Checkbox/index",
		"mit-checkbox-group": "/components/Checkbox-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-checkbox-group bind:change="onCheckboxChange">
	<mit-checkbox title="西瓜" value="watermelon"></mit-checkbox>
	<mit-checkbox title="香蕉" value="banana"></mit-checkbox>
	<mit-checkbox title="苹果" value="apple"></mit-checkbox>
	<mit-checkbox title="梨" value="pear"></mit-checkbox>
</mit-checkbox-group>
```

## API

### Checkbox

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | checkbox的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### Checkbox-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
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

cities 数据下载地址 [https://www.mitooui.com/download/address.js][1]

 [1]: https://www.mitooui.com/download/address.js

cancel 为右上角点击按钮事件回调
    
select 为点选城市的回调，选择城市的id在detail中

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

|参数 |说明 |类型 |默认值 |必须 |可选参数 |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| position  | 出现的位置    | String |   | true  | 'left','right'  |
| visible   | 可见性   | Boolean  | false  | true  | true, false   |
| drawerHidden | 抽屉消失回调 | Function | false | false | |
## Grid

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-grid": "/components/Grid/index",
		"mit-grid-item": "/components/Grid-Item/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-grid columnNum="3">
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
</mit-grid>
```

## API

### Grid

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| columnNum | 标题 | String | | true |

### Grid-Item

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| icon | icon | slot | | false |
| title | title | slot | | false |
## Grid

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-grid": "/components/Grid/index",
		"mit-grid-item": "/components/Grid-Item/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-grid columnNum="3">
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
</mit-grid>
```

## API

### Grid

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| columnNum | 标题 | String | | true |

### Grid-Item

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| icon | icon | slot | | false |
| title | title | slot | | false |
## Icon

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-icon": "/components/Icon/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-icon type="category" size="30" color="red" mit-class="fontClass"></mit-icon>
```

## API

### Grid

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| type | 名字 | String | | true |
| size | 字体大小，单位rpx | Number | | false |
| color | 字体颜色 | String | | false |
| mit-class | 字体样式类 | String | | false |

##### <font color="#660000">注：如果给了size和color属性，mit-class不会覆盖size和color样式。</font>
## ImageClipper 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-image-clipper": "/components/ImageClipper/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
  <mit-image-clipper bind:handleCut="handleCut" visible="{{visible}}" image="{{image}}"/>
```

## API

|参数 |说明 |类型 |默认值 |必须 |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| visible| 可见性   | Boolean  | false  | true  |
| image | 要裁剪图片地址，可以是微信提供的临时图片地址，或者base64 | String | false | false | 
| handleCut | 裁剪后的回调，可以获取回调中裁剪后图片的地址 | Function | false | false |
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
| type | 文本框类型 | String | false | false | 'text', 'password', 'idcard', 'digit' |
| placeholderClass | placeholder类 | String | false | false | |
| placeholderStyle | placeholder样式 | String | false | false | |


## 事件
| 事件名称 | 说明 |
|:-------:|:---:|
| change  | 绑定变化时触发 |
| focus   | 获取焦点时触发 |
| blur    | 失焦时触发     |


## Modal 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-modal": "/components/Modal/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-modal>
    ...
</mit-modal>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| visible | 是否可见 | Boolean |  | true  | true,false |
| title | 标题 | String |  | false | |
| vertical | 纵向按钮 | Boolean | false | false | |
| footer | 底部按钮 | Array | false | false |  |
| footer数组参数 |  |   |  |  |  |
| color | 底部按钮颜色 | String | false | false |  |
| text | 底部按钮文字 | String | false | false |  |
| event | 按钮上具体事件 | Function | false | false |  |
| closeable | 该按钮可否关闭对话框 | Boolean | false | false |  |



## NoticeBar 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-notice-bar": "/components/NoticeBar/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-notice-bar>
    ...
</mit-notice-bar>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| text | 通知文字 | String |  | false  | |
| closeable | 是否可关闭 | Boolean | false | false | |
| transform | 是否可开启跑马灯 | Boolean | false | false | |

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
## Radio

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-radio": "/components/Radio/index",
		"mit-radio-group": "/components/Radio-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-radio-group bind:change="onradioChange">
	<mit-radio title="西瓜" value="watermelon"></mit-radio>
	<mit-radio title="香蕉" value="banana"></mit-radio>
	<mit-radio title="苹果" value="apple"></mit-radio>
	<mit-radio title="梨" value="pear"></mit-radio>
</mit-radio-group>
```

## API

### radio

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | radio的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### radio-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
## Radio

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-radio": "/components/Radio/index",
		"mit-radio-group": "/components/Radio-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-radio-group bind:change="onradioChange">
	<mit-radio title="西瓜" value="watermelon"></mit-radio>
	<mit-radio title="香蕉" value="banana"></mit-radio>
	<mit-radio title="苹果" value="apple"></mit-radio>
	<mit-radio title="梨" value="pear"></mit-radio>
</mit-radio-group>
```

## API

### radio

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | radio的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### radio-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
## Row, Col

## 使用指南
我们采用了24格栅格系统，将一个设计区域分割成24份，使用时需要row和col一起使用，具体示例如下。

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-row": "/components/Row/index",
		"mit-col": "/components/Col/index"
	}
}

```
### Step 2

在wxml文件里添加组件代码

```html
<mit-row mit-class="row">
	<mit-col mit-class="col" span="24">
		<view class="grid-content">span 24</view>
	</mit-col>
</mit-row>
```

## API

### row

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| gutter | 栅格间隔,单位rpx |  | | false |
| mit-class | 额外样式 | String |  | false |

### col
|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| span | 栅格占位格数, | Number | | true |
| offset | 栅格左侧的间隔格数 | Number |  | false |
## Switch

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-switch": "/components/Switch/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-switch name="sw1"/>
```


## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| name | name | String |  | true  | |
| large | 大小 | Boolean |  | false | |
| color | 自定义颜色 | String | false | false | |
| disabled | 禁用 | Boolean | false | false |  |


| 事件名称 | 说明 |
|:-------:|:---:|
| change  | 绑定变化时触发 |


## Tabs 

与Tabs-Cell配合使用 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-tabs": "/components/Tabs/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-tabs>
    ...
</mit-tabs>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| brandColor | 自定义品牌色 | String |  | false  | |
| scroll | 是否可滑动 | Boolean | false | false | |
| onChangeTab | 绑定tab切换方法回调 | Function | false | false |
## Tabs-Cell 

与Tabs配合使用 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-tabs-cell": "/components/Tabs-Cell/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-tabs-cell>
    ...
</mit-tabs-cell>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| active | 是否选中 | Boolean | false | false |

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
## Toast

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-toast": "/components/Toast/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-button size="large" type="default" bindtap="showBase">基础样式</mit-button>
<mit-button size="large" type="default" bindtap="showSuccess">成功！</mit-button>
<mit-button size="large" type="default" bindtap="showFail">失败！</mit-button>
<mit-button size="large" type="default" bindtap="showNetwork">网络连接失败！</mit-button>
<mit-button size="large" type="default" bindtap="showLoading">加载中</mit-button>
<mit-toast id="toast"></mit-toast>
```

### Step 3

在js文件中使用

```js
const { Toast } = require('../../components/Mixins/Toast');

# 详细代码使用请查看demo
Page({
	showBase() {
		Toast({
			content: '普通的tosat提示！'
		})
	}
})
```

## API

### Toast

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| content | toast显示内容 | String | | true |
| type | toast类型 可选值为 success / fail / network / loading | String |  | false |
## toptips

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-toptips": "/components/Toptips/index"
	}
}

```
### Step 2

在wxml文件里添加组件代码

```html
<mit-button size="large" type="default" bindtap="showToptips">通用样式</mit-button>
<mit-button size="large" type="default" bindtap="showSuccess">success</mit-button>
<mit-button size="large" type="default" bindtap="showWarn">warn</mit-button>
<mit-button size="large" type="default" bindtap="showError">error</mit-button>
<mit-button size="large" type="default" bindtap="showTimes">自定义事件时间</mit-button>
<mit-toptips id="toptips"></mit-toptips>
```

### Step 3

在js文件中使用

```js
const { Toptips } = require('../../components/Mixins/Toptips');

# 详细代码使用请查看demo
Page({
	showBase() {
		Toptips({
			content: '这是一个通用样式'
		})
	}
})
```

## API

### toptips

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| content | toptips显示内容 | String | | true |
| type | toptips类型 可选值为 success / warn / error | String |  | false |
| duration | 延迟时间，单位秒 | Number | 1.5（秒） | false |
