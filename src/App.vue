<template>
  <div id="app">
    <!-- <router-view/> -->
    <Foo/>
    <Bar/>
  </div>
</template>

<script>
import Foo from './components/foo'
import Bar from './components/bur'

export default {
  name: 'App',
  components: {
    Foo,
    Bar
  }
}
</script>

<style scoped>

</style>
