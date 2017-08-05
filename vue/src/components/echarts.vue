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
				echarts:null
			}
		},
		created(){
			var script = document.createElement('script')
			script.src="/static/lib/echarts.min.js"
			document.body.appendChild(script)
			this.updateMessage()
			this.insertScriptTag()
		},
		mounted(){
			console.log(window.echarts)
			//console.log(echarts)
		},
		methods:{
			updateMessage(){
				this.message = '更新完成'
			      console.log(this)
			      console.log(this.$el) // => '没有更新'
			      this.$nextTick(()=>{
			        console.log(this.$el) // => '更新完成'
			        console.log(window.echarts)
			      })
			},
			insertScriptTag(){
				var script = document.createElement('script')
				script.src="/static/lib/echarts.min.js"
				document.body.appendChild(script)
				console.log(script.loaded)
				if(script.loaded){

				}else{
					script.addEventListener('load', ()=>{
						
					})
				}
			},
			initEcharts(){

			}
		}
}		
</script>