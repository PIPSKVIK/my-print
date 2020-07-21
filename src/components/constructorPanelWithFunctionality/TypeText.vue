<template>
  <div class="type-text">
    <div class="collapse" id="collapseExample4">
      <BaseTextarea
        name="Text"
        v-model="createText"
      />

<!--  <div class="wrapper-top">
        <input type="text" v-model="turn" placeholder="Text rotation">
        <button @click="turn++">+</button>
        <button @click="turn--">-</button>
      </div>
      <div>
        <input type="text" v-model="Y" placeholder="Y">
        <button @click="Y++">+</button>
        <button @click="Y--">-</button>
        <input type="text" v-model="X" placeholder="X">
        <button @click="X++">+</button>
        <button @click="X--">-</button>
      </div>
      <div>
        <input type="range" min="0" max="150" v-model="X">
        <input type="range" min="0" max="180" v-model="Y">
      </div>
      <div class="wrapper">
        <p class="rotate" :style="[changePosition, rotateStyle]">Some text</p>
      </div> -->

      <!-- select выбора цвета -->
      <BaseSelect
        @select="optionsColor"
        :options="allOptionsColors"
        :selected="selectedName"
      >
        <template v-slot:title>
          <span>Select</span>
        </template>
      </BaseSelect>

    </div>
  </div>
</template>

<script>
import { BaseTextarea, BaseSelect } from '@/components/baseUi'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea,
    BaseSelect
  },
  model: {
    prop: 'textarea'
  },
  props: {
    textarea: {
      type: String
    },
    optionsColors: {
      type: Array
    },
    allOptionsColors: {
      type: Array
    },
    selectedName: {
      type: String
    }
  },
  data () {
    return {
      selectColors: '',
      options: [
        { text: 'white', color: '#fff' }
      ],
      turn: null,
      X: null,
      Y: null
    }
  },
  computed: {
    createText: {
      get () {
        return this.textarea
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    rotateStyle () {
      return {
        transform: 'rotate(' + this.turn + 'deg)'
      }
    },
    changePosition () {
      return {
        top: this.Y + 'px',
        left: this.X + 'px'
      }
    }
  },
  methods: {
    optionsColor (option) {
      this.$emit('optionsColor', option)
    }
  }
}
</script>

<style lang="scss" scoped>

  .wrapper {
    margin-top: 30px;
    text-align: center;
    width: 200px;
    height: 200px;
    background: #dfb19f;
    position: relative;
  }

  .rotate {
    position: absolute;
    color: #2c161b;
    font-size: 20px;
  }

  .wrapper-top {
    margin-top: 30px;
  }

</style>
