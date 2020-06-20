<template>
  <input
    :type="text"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value, $event.target.placeholder, $event.target.text)"
  >
</template>

<script>
export default {
  name: 'formInput',
  props: ['value', 'text', 'placeholder']
}
</script>

<style lang="scss" scoped>

</style>
