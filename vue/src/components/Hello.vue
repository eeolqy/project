<template>
  <div class="hello">
    <h1 @click="a">{{ msg }}</h1>
    {{value}}
  </div>
</template>

<script>
export default {
  props:['value'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    a(){
      //this.$emit('input',9)
      this.value=11;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
