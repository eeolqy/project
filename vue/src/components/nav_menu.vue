<template>
    <div class="">
        <el-menu mode="vertical" router default-active="1"  class="el-menu-vertical-demo">
            <el-menu-item-group v-for="(title,index) in navMenuConfig" :key="index">
                <template slot="title">
                    <i class="el-icon-caret-right">{{title.lable+index}}</i>
                </template>

                <el-menu-item v-for="(lable,key) in title.children " :route="path01" :key="key"  index="1">
                    <i class="el-icon-message"></i>导航{{key}}{{typeof key}}{{(index)*title.children.length+key}}
                </el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组一">
                <el-menu-item :route="path01"  index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
                <el-menu-item :route="path02"  index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
                <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
                <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
            </el-menu-item-group> -->
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
