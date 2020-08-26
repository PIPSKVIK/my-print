<template>
  <div class="base-input">
    <label :for="name">
      {{ label }}
    </label>
    <input
      class="form-control"
      v-bind="$attrs"
      :type="passwordRevealed ? 'text' : inputType"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <a href="#" v-if="type == 'password'" @click.prevent="passwordRevealed = !passwordRevealed">
      {{ passwordRevealed ? 'Скрыть' : 'Показать' }} пароль
    </a>
  </div>
</template>

<script>

export default {
  name: 'BaseInput',
  inheritAttrs: true,
  props: {
    name: {
      required: false,
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      required: false,
      type: String,
      default: ''
    },
    type: {
      required: true,
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      passwordRevealed: false,
      inputType: this.type
    }
  }
}
</script>
