<template>
  <ul class="nav-links">
    <BaseRouterLink
      v-for="link in links"
      :key="link.name"
      :to="{ name: link.name }"
      tag="li"
    >
      {{ link.title }}
    </BaseRouterLink>
    <p class="nav-links__user">Email пользователя: {{ name }} </p>
  </ul>
</template>

<script>
import BaseRouterLink from '@/components/baseUi/BaseRouterLink'

export default {
  name: 'NavLinks',
  components: {
    BaseRouterLink
  },
  data () {
    return {
      links: [
        { title: 'Главная', name: 'Home' },
        { title: 'Вход', name: 'Enter' },
        { title: 'Выход', name: 'Exit' },
        { title: 'Регистрация', name: 'Registration' },
        { title: 'Список макетов', name: 'LayoutList' },
        { title: 'Создать макет', name: 'CreateLayout' }
      ]
    }
  },
  computed: {
    name () {
      return this.$store.getters.info.email
    }
    // links () {
    //   if (this.isUserLoggIn) {
    //     return [
    //       { title: 'Главная', name: 'Home' },
    //       { title: 'Список макетов', name: 'LayoutList' },
    //       { title: 'Создать макет', name: 'CreateLayout' },
    //       { title: 'Выход', name: 'Exit' }
    //     ]
    //   }
    //   return [
    //     { title: 'Вход', name: 'Enter' },
    //     { title: 'Регистрация', name: 'Registration' }
    //   ]
    // }
  }
}
</script>

<style lang="scss" scoped>
  .nav-links :not(:last-child) {
    margin-right: 10px;
  }

  .nav-links__user {
    font-size: 18px;
    color: #1dad7d;
    margin: 0;
  }
</style>
