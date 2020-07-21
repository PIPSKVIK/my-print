<template>
  <div class="base-options">
    <div
      class="options"
      @click="optionsVisilble = !optionsVisilble"
    >
      <div class="options-title">
        <slot name="title">Default name</slot>
      </div>
    </div>
    <div
      class="options"
      v-if="optionsVisilble"
    >
      <p
        class="options-list"
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
    width: 150px;
  }

  .options p {
    margin: 0;
      &:hover {
        background: #e7e7e7;
      }
  }

  .options {
    border: 1px solid #808080;
    border-radius: 5px;
    top: 30px;
    right: 0;
    width: 100%;
    cursor: pointer;
  }

  .options {
    border: 1px solid #808080;
  }

  .options-list {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .options-title {
    display: flex;
    align-items: center;
  }

</style>
