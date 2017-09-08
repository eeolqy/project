<template>
    <li>
        <span @click="toggle">
            <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
            <i v-if="!isFolder" class="icon file-text"></i>
            {{ model.menuName }}
        </span>
        <ul v-show="open" v-if="isFolder">
            <tree-folder-contents v-for="item in model.children" :model="item"></tree-folder-contents>
        </ul>
    </li>
</template>

<script>

    export default {
        name:'tree-folder-contents',
        props: ['model'],
        data() {
            return {
                open: false,
                isFolder: true
            }
        },
        computed: {
            isFolder: function() {
                return this.model.children && this.model.children.length
            }
        },
        methods: {
            toggle: function() {
                if (this.isFolder) {
                    this.open = !this.open
                }
            }
        }
    }
</script>

<style lang="less">

</style>
