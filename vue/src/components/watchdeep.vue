<template>
    <!-- Vue data 对象的深度观察 -->
    <div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                a:'',
                b:{
                    a:''
                },
                b:{
                    a:{
                        c:
                    }
                }
            }
        },
        watch:{
            a(oldvalue,newValue){
                console.log(oldvalue,newValue)
            },
            b(oldvalue,newValue){
                console.log(oldvalue,newValue)
            }
        }
    }
</script>

<style lang="less">

</style>
