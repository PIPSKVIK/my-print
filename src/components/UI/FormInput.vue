<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'formInput',
  props: ['value']
}
</script>

<style lang="scss" scoped>

</style>
