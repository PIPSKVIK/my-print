<template>
  <div class="nav-link">
    <ul class="nav nav-link__list">
      <li
        v-for="link in linksData"
        :key="link.title"
      >
        <router-link
          :to="`${link.name}`"
          :exact="true"
          class="btn btn-outline-primary nav-link__button"
        >
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  comments: {
  },
  props: {
    linksData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link__list :not(:last-child) {
  margin-right: 10px;
}

.router-link-active {
  background: rgb(6, 61, 240);
  color: white;
}
</style>
