<template>
  <div>
    <label :for="name" :label="label">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :type="passwordRevealed ? 'text' : inputType"
      :name="name"
      :id="name"
      class="form-control"
      @input="$emit('input'), $event.target.value"
      :placeholder="placeholder"
    >
    <a href="#" v-if="type == 'password'" @click.prevent="passwordRevealed = !passwordRevealed">
      {{ passwordRevealed ? 'Скрыть' : 'Показать' }} пароль
    </a>
  </div>
</template>

<script>

export default {
  name: 'BaseFormInput',
  inheritAttrs: false,
  props: {
    placeholder: {
      required: true,
      type: String,
      default: ''
    },
    id: {
      required: true,
      type: String,
      default: ''
    },
    name: {
      required: false,
      type: String,
      default: ''
    },
    forInput: {
      required: false,
      type: String,
      default: ''
    },
    label: {
      required: true,
      type: String,
      default: 'Label'
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
