<template>
  <div id="app">
    <router-view></router-view>
    <list></list>
    <foot></foot>
  </div>
</template>

<script>
import list from './components/list.vue'
import foot from './components/foot.vue'
export default {
  name: 'app',
  components:{
  	list,
  	foot
  }
}
</script>

<style>

</style>
