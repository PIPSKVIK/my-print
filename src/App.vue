<template>
  <div id="app">
    <div class="container-md">
      <header class="header shadow-sm p-3 mb-5 bg-white rounded">
      <NavLogo />
      <NavLink
        :linksData="links"
      />
      </header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavLink from './components/Nav/NavLink'
import NavLogo from './components/Nav/NavLogo'
export default {
  name: 'App',
  components: {
    NavLink,
    NavLogo
  },
  data: () => ({
    links: [
      { title: 'Главная', name: '/' },
      { title: 'Вход', name: '/enter' },
      { title: 'Выход', name: '/exit' },
      { title: 'Авторизация', name: '/authorization' },
      { title: 'Список макетов', name: '/layout-list' },
      { title: 'Создать макет', name: '/creat-layout' }
    ]
  })
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
