Component({externalClasses:["mit-class"],options:{multipleSlots:!0},properties:{brandColor:{type:String,value:""},scroll:{type:Boolean,value:!1},isScroll:{type:Boolean,value:!1}},data:{},relations:{"../TabsCell/index":{type:"child"}},ready(){let e=this.getRelationNodes("../TabsCell/index");e.length>6&&this.setData({isScroll:!0});for(let t of e)if(t.properties.active){wx.createSelectorQuery().in(t).select(".mit-tabs-cell-active .mit-tabs-cell-bottom").boundingClientRect(function(t){for(let l of e)l.setData({activeLeft:t.left})}).exec();break}},methods:{}});