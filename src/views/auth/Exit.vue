<template>
  <div class="exit">
    <h2>Exit</h2>
    <p>Вы действительно хотите выйти из системы?</p>
    <BaseButton
      theme="info"
      sizes="large"
      @click="logout"
    >
      Выход из системы
    </BaseButton>
  </div>
</template>

<script>
import { BaseButton } from '@/components/baseUi'

export default {
  name: 'Exit',
  components: {
    BaseButton
  },
  methods: {
    async logout () {
      await this.$store.dispatch('loguot')
      this.$router.push('/enter?message=logout')
    }
  }
}
</script>

<style lang="scss">
  .exit {
    text-align: center;
    margin-top: 40px;
  }
</style>
