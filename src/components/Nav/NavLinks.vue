<template>
  <ul class="nav-links">
    <BaseRouterLink tag="li" :to="{ name: 'Home' }" >Главная</BaseRouterLink>
    <BaseRouterLink tag="li" :to="{ name: 'Enter' }">Вход</BaseRouterLink>
    <BaseRouterLink tag="li" :to="{ name: 'Exit' }" >Выход</BaseRouterLink>
    <BaseRouterLink tag="li" :to="{ name: 'Registration' }" >Регистрация</BaseRouterLink>
    <BaseRouterLink tag="li" :to="{ name: 'LayoutList' }" >Список макетов</BaseRouterLink>
    <BaseRouterLink tag="li" :to="{ name: 'CreateLayout' }" >Создать макет</BaseRouterLink>
  </ul>
</template>

<script>
import BaseRouterLink from '../../components/baseUi/BaseRouterLink'

export default {
  name: 'NavLinks',
  components: {
    BaseRouterLink
  }
}
</script>

<style lang="scss" scoped>
  .nav-links :not(last-child) {
    margin-right: 10px;
  }
</style>
