import BoxView from "./index.vue"
import Vue from "vue"

export default (()=>{
	let defaultVal = {
		title:"信息",
		content:"内容"
	}
	let MessageBoxFn = Vue.extend(BoxView)
	return (options)=>{
		for(var key in options) {
			defaultVal[key] = options[key]
		}
		let BoxVm = new MessageBoxFn({
			el:document.createElement("div"),
			data:{
				title:defaultVal.title,
				content:defaultVal.content
            },
            methods:{
                handleOk() {
                    document.body.removeChild(BoxVm.$mount().$el) 
                },
                handleClose() {
                    document.body.removeChild(BoxVm.$mount().$el) 	
                }
            }
		})
		
	document.body.appendChild(BoxVm.$mount().$el) 
	}
	
})()