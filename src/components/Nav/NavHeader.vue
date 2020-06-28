<template>
  <div class="header shadow-sm p-3 mb-5">
    <NavLogo />
    <NavLinks />
  </div>
</template>

<script>
import { NavLogo } from '@/components/nav'
import NavLinks from '../nav/NavLinks'

export default {
  name: 'NavHeader',
  components: {
    NavLogo,
    NavLinks
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
