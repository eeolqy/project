<template>
    <div class="">
        {{defaultActive}}
        <el-menu mode="vertical" router  :default-active="defaultActive"  class="el-menu-vertical-demo">
            <el-menu-item-group v-for="(title,index) in navMenuConfig" :key="index">
                <template slot="title">
                    <i :class="title.icon"></i>{{title.lable}}
                </template>

                <el-menu-item v-for="(lable,key) in title.children " :route="lable.route" :key="key" :index="lable.path" >
                    <i :class="lable.icon"></i>{{lable.lable}}
                </el-menu-item>
            </el-menu-item-group>
        </el-menu>
    </div>
</template>

<script>
    export default {
        props:['navMenuConfig'],
        created(){
            console.log(window.location.hash)
        },
        computed:{
            defaultActive(){
                return window.location.hash.substring(1,window.location.hash.length)
            }
        }
    }
</script>

<style lang="less">
</style>
