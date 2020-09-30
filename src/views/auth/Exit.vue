<template>
  <div class="exit">
    <h2>Exit</h2>
    <BaseButton
      theme="info"
      sizes="large"
      @click="modalShow = true"
    >
      Выход из системы
    </BaseButton>
    <BaseModal
      :modalShow="modalShow"
      @modal-close="modalShow = false"
      @logout="logout"
      buttonName="Да, хочу!"
    >
      <template #header>
        Вы точно хотите выйти?
      </template>
    </BaseModal>
  </div>
</template>

<script>
import { BaseButton, BaseModal } from '@/components/baseUi'

export default {
  name: 'Exit',
  components: {
    BaseButton,
    BaseModal
  },
  data () {
    return {
      modalShow: false
    }
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
