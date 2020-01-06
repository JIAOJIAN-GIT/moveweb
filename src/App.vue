<template>
  <div id="app">
    <!-- <router-view/> -->
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1600197_hvtjwa13osg.css">
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
