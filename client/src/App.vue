<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
