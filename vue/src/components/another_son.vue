<template>
    <div class="">
        {{msg}}
    </div>
</template>

<script>
    import VueEvent from '../bus/event.js'
    export default {
        data(){
            return {
                msg:''
            }
        },
        mounted(){
           VueEvent.$on('methodsA',(value)=>{
               this.msg = value
           })

           VueEvent.$on('methodsAForConfirmCheckboxs',(value)=>{
               this.msg = value
           })
           //console.log(this)
        }
    }
</script>

<style lang="css">
</style>
