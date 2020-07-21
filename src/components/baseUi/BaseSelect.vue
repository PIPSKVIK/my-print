<template>
  <div class="base-options">
    <div
      class="options-title"
      @click="optionsVisilble = !optionsVisilble"
    >
      <div>
        <slot name="title">Default name</slot>
        <span> {{ selected }} </span>
      </div>
    </div>
    <div
      class="options"
      v-if="optionsVisilble"
    >
      <p
        class="options-title"
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
      {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    options: {
      type: Array
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      optionsVisilble: false
    }
  },
  methods: {
    selectOption (option) {
      this.$emit('select', option)
      this.optionsVisilble = false
    },
    hideSelect () {
      this.optionsVisilble = false
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss" scoped>

  .base-options {
    position: relative;
    width: 200px;
  }

  .options p {
    margin: 0;
      &:hover {
        background: #e7e7e7;
      }
  }

  .options {
    border: 1px solid #808080;
    position: absolute;
    top: 30px;
    right: 0;
    width: 100%;
  }

  .options-title {
    border: 1px solid #808080;
  }

</style>
