<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    {{num}}
    <Hello v-model="num"></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
export default {
  data(){
    return {
      num:3
    }
  },
  components:{
    Hello:Hello
  }
}
</script>
