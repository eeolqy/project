<template>
    <div class="">
        render

    </div>
</template>

<script>
    export default {
        data(){
            return {
                config:{
                    render(h,data){
                        return h('div',{},[data])
                    }
                }
            }
        }
    }
</script>

<style lang="less">
</style>
