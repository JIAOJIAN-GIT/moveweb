<template>
  <div>
      <h2>Bur</h2>
      <p>{{$store.state.count}}</p>
      <button @click="$store.dispatch('add2')">-</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
