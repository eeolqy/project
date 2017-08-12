<template>
    <div class="">
        <el-menu mode="vertical" router  default-active="/watch"  class="el-menu-vertical-demo">
            <el-menu-item-group v-for="(title,index) in navMenuConfig" :key="index">
                <template slot="title">
                    <i :class="title.icon"></i>{{title.lable}}
                </template>

                <el-menu-item v-for="(lable,key) in title.children " :route="lable.route" :key="key" :index="lable.path" >
                    <i class="el-icon-message"></i>{{lable.lable}}
                </el-menu-item>
            </el-menu-item-group>
        </el-menu>
    </div>
</template>

<script>
    export default {
        props:['navMenuConfig'],
        data(){
            return {
                path01:{
                    path:'/',
                },
                path02:{
                    path:'/two',
                    query:{
                        id:2
                    }
                }
            }
        }
    }
</script>

<style lang="less">
</style>
