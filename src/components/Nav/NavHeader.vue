<template>
  <div class="header shadow-sm p-3 mb-5 bg-white rounded">
    <NavLogo />
    <NavLinks
      :linkData="links"
    />
  </div>
</template>

<script>
import { NavLinks, NavLogo } from '@/components/nav'
export default {
  name: 'NavHeader',
  components: {
    NavLogo,
    NavLinks
  },
  data () {
    return {
      links: [
        { title: 'Главная', name: '/', exact: true },
        { title: 'Вход', name: '/enter', exact: null },
        {
          title: 'Выход',
          name: '/exit',
          exact: null,
          click () {
            this.$router.push('/')
          }
        },
        { title: 'Регистрация', name: '/registration', exact: null },
        { title: 'Список макетов', name: '/layout-list', exact: null },
        { title: 'Создать макет', name: '/creat-layout', exact: null }
      ]
    }
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
