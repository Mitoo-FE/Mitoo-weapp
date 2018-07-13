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

