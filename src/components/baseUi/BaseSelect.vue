<template>
  <div class="base-options">
    <div class="options" @click="optionsVisilble = !optionsVisilble">
      <div class="options-title">
        <slot name="title">Default name</slot>
      </div>
    </div>
    <div class="options-list"  v-if="optionsVisilble">
      <p
        class="options-list__item"
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
    position: relative;
  }

  .options {
    border: 1px solid #808080;
    padding: 3px;
    background: #ffffff;
    border-radius: 10px 0;
    cursor: pointer;
      &:hover {
        background: #c2c2c2;
      }
  }

  .options-list {
    position: absolute;
    background: #ffffff;
    padding: 5px;
    border-radius: 10px 0;
    top: 30px;
  }

  .options-list:not(:last-child) {
    margin-bottom: 10px;
  }

  .options-title {
    display: flex;
    align-items: center;
  }

  .options-list__item {
    cursor: pointer;
    margin: 0;
      &:hover {
        background: #c2c2c2;
      }
  }
</style>
