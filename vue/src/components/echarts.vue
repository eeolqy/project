<template>
	<div>
		{{option}}
		<div ref="main" style="width:auto;height:400px;"></div>
	</div>
</template>


<script>
	export default{
		name:'',
		props:['option','config'],
		data(){
			return {
				message:'没有更新',
				echarts:null,
				scriptTagStatus:0,
			}
		},
		watch:{
			option:{
				handler(newValue){
					console.log(this)
					this.echarts.hideLoading()
					this.echarts.setOption(this.option)
				},
				deep:true
			},
			config:{
				handler(newValue){

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
					window.addEventListener('load',()=>{
						this.$emit('ready',this.echarts);
					})
					let echartsWrapDom = this.$refs.main
					this.echarts = window.echarts.init(echartsWrapDom)
					console.log(this.echarts.showLoading())
				  });
				}

			}
		}
}
</script>
