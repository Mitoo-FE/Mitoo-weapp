Component({externalClasses:["mit-class"],relations:{"../Radio/index":{type:"child",linked(e){},linkChanged(e){console.log("target",e)}}},data:{checked:[],currentValue:""},methods:{onChange(e){this.getRelationNodes("../Radio/index").forEach((a,t)=>{a.changeSelected(a.data.value==e.value)}),this.triggerEvent("change",e)}},ready(){const e=this.getRelationNodes("../Radio/index");e.forEach((a,t)=>{t==e.length-1&&a.setData({isLast:!0})})}});