<template>
  <div class="create-layout">
    <Instruction />
    <BaseRouterLink
      theme="danger"
      :to="{ name: 'LayoutConstructor' }"
    >
      Перейти в конструктор
    </BaseRouterLink>
    <!-- Тут будет инструкция пользования конструктором -->
  </div>
</template>

<script>
import { Instruction } from '@/components/constructor'
import { BaseRouterLink } from '@/components/baseUi'

export default {
  name: 'LayoutsCreate',
  components: {
    Instruction,
    BaseRouterLink
  }
}
</script>

<style lang="scss" scoped>

  .create-layout {
    text-align: center;
    margin-top: 40px;
  }

</style>
