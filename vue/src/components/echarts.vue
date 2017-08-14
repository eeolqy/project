<template>
	<div>
		<div :id="id" ref="main" style="width:auto;height:400px;"></div>
	</div>
</template>


<script>
	export default{
		name:'',
		props:['option','config'],
		data(){
			return {
				id:'echarts_' + (Math.random() * 100000000000000000),
				echarts:null,
				scriptTagStatus:0,
			}
		},
		watch:{
			option:{
				handler(newValue){
					console.log(22)
					this.echarts.setOption(newValue)
				},
				deep:true
			},
			config:{
				handler(newValue){
					if(newValue.loading){
						this.echarts.hideLoading()
					}else{
						this.echarts.showLoading()
					}
				},
				deep:true
			}
		},
		created(){
			if (window.echarts !== undefined) {
			 	this.scriptTagStatus = 1;
			 	this.initEcharts();
		    } else {
			 	this.insertScriptTag();
		    }
			console.log(this)
		},
		methods:{
			insertScriptTag(){
				console.log(this)
				var script = document.createElement('script')
				script.src=this.config.path
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
					window.addEventListener('load',()=>{
						this.$emit('ready',this.echarts);
					})
					let echartsWrapDom = this.$refs.main
					this.echarts = window.echarts.init(echartsWrapDom)
					this.echarts.showLoading()
				  });
				}

			}
		}
}
</script>
