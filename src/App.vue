<template>
  <div id="app">
    <div class="container-md">
      <header class="header shadow-sm p-3 mb-5 bg-white rounded">
        <NavLogo />
        <NavLink />
      </header>
      <router-view />
    </div>
  </div>
</template>

<script>
import { NavLink, NavLogo } from './components/nav'
export default {
  name: 'App',
  components: {
    NavLink,
    NavLogo
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
