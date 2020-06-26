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
        { title: 'Вход', name: '/enter' },
        {
          title: 'Выход',
          name: '/exit',
          click: () => this.$router.push('/')
        },
        { title: 'Регистрация', name: '/registration' },
        { title: 'Список макетов', name: '/layout-list' },
        { title: 'Создать макет', name: '/creat-layout' }
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
