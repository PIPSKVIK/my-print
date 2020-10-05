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
    <transition name="fade">
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
    </transition>
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
      modalShow: false,
      show: false
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

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .wrapper1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  .modal1 {
    padding: 50px 80px;
    border-radius: 10px;
    background: #6e006e;
    display: inline-block;
    color: #ffffff;
    font-size: 24px;
  }
  .button1 {
    margin-bottom: 30px;
    width: 100px;
  }

  .exit {
    text-align: center;
    margin-top: 40px;
  }
</style>
