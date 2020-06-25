<template>
  <div class="nav-link">
    <ul class="nav nav-link__list">
      <li
      v-for="(link, index) in linkData"
      :key="link.title"
      >
        <router-link
          :to="link.name"
          :exact="link.exact"
          class="btn btn-outline-primary nav-link__button"
          @click="logout(index)"
        >
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'NavLinks',
  props: {
    linkData: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  methods: {
    logout (index) {
      const func = this.linkData[index].click

      if (typeof func === 'function') {
        func()
      }
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
