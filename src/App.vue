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
