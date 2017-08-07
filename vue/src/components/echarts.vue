<template>
	<div>
		Echarts
		{{message}}
		<div ref="main" style="width:500px;height:300px;"></div>
	</div>
</template>


<script>
	export default{
		name:'',
		data(){
			return {
				message:'没有更新',
				echarts:null,
				scriptTagStatus:0
			}
		},
		created(){
			// var script = document.createElement('script')
			// script.src="/static/lib/echarts.min.js"
			// document.body.appendChild(script)
			if (window.echarts !== undefined) {
			 // 如果全局对象存在，说明编辑器代码已经初始化完成，直接加载编辑器
			 	this.scriptTagStatus = 1;
			 	this.initEcharts();
		    } else {
			 // 如果全局对象不存在，说明编辑器代码还没有加载完成，需要加载编辑器代码
			 	this.insertScriptTag();
		    }
		},
		mounted(){
			console.log(window.echarts)
			//console.log(echarts)
		},
		beforeMounted(){

		},
		methods:{
			insertScriptTag(){
				var script = document.createElement('script')
				script.src="/static/lib/echarts.min.js"
				document.body.appendChild(script)

				if(script.loaded){
					this.scriptTagStatus+=1;
				}else{
					script.addEventListener('load', ()=>{
						script.loaded=true
						this.scriptTagStatus+=1;
		 				this.initEcharts();
					})
				}
				this.initEcharts()
			},
			initEcharts(){
				if (this.scriptTagStatus === 1 && this.echarts === null) {
				  // Vue 异步执行 DOM 更新，这样一来代码执行到这里的时候可能 template 里面的 script 标签还没真正创建
				  // 所以，我们只能在 nextTick 里面初始化 UEditor
				  this.$nextTick(() => {
					this.instance = window.echarts;
					// 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
					console.log(this.instance);
					window.echarts.init(() => {
					  this.$emit('ready', this.echarts);
					});
				  });
				}

			}
		}
}
</script>
