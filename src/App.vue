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
      { title: 'Главная', name: '/', exact: null },
      { title: 'Вход', name: '/enter', exact: null },
      { title: 'Выход', name: '/exit', exact: null },
      { title: 'Регистрация', name: '/registration', exact: null },
      { title: 'Список макетов', name: '/layout-list', exact: null },
      { title: 'Создать макет', name: '/creat-layout', exact: null }
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
