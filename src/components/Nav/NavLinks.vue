<template>
  <div class="nav-link">
    <ul class="nav nav-link__list">
      <li
      v-for="(link) in linkData"
      :key="link.title"
      >
        <template v-if="link.click">
          <button
            :exact="link.exact || null"
            class="btn btn-outline-primary nav-link__button"
            @click="link.click"
          >
            {{ link.title }}
          </button>
        </template>
        <template v-else>
          <router-link
            :to="link.name"
            :exact="link.exact || null"
            class="btn btn-outline-primary nav-link__button"
            @click.native="logout($event, index)"
          >
            {{ link.title }}
          </router-link>
        </template>
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
