<template>
  <div class="header shadow-sm p-3 mb-5">
    <NavLogo />
    <NavUser />
    <NavLinks />
  </div>
</template>

<script>
import { NavLogo } from '@/components/nav'
import NavUser from './NavUser'
import NavLinks from '../nav/NavLinks'

export default {
  name: 'NavHeader',
  components: {
    NavLogo,
    NavLinks,
    NavUser
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
</style>
