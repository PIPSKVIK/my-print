<template>
  <div id="app">
    <div class="container-md">
      <NavHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
import { NavHeader } from './components/nav'
export default {
  name: 'App',
  components: {
    NavHeader
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Lobster&family=Oswald&family=Press+Start+2P&family=Ruslan+Display&display=swap');

</style>
