<template>
  <div class="base-options">
    <span :style="{ 'font-weight': selectedWeight, 'color': selectedColor, 'font-family': selectedFontFamily, 'font-size': selectedFontSize + 'px' }">Какой-то текст</span>
    <div>
      <select v-model="selectedWeight">
        <option
          v-for="(optionWeight, index) in optionsWeight"
          :key="index"
          :value="optionWeight.value"
        >
          {{ optionWeight.text }}
        </option>
      </select>
      <!-- 22222222222 -->
      <select v-model="selectedColor">
        <option
          v-for="(optionColor, index) in optionsColor"
          :key="index"
          :value="optionColor.color"
        >
        {{ optionColor.text }}
        </option>
      </select>
      <!-- 33333333 -->
      <select v-model="selectedFontFamily">
        <option
          v-for="(optionFontFamily, index) in optionsFontFamily"
          :key="index"
          :value="optionFontFamily.font"
        > {{ optionFontFamily.text }} </option>
      </select>
      <!-- 44444444444 -->
      <select v-model="selectedFontSize">
        <option
          v-for="(optionFontSize, index) in optionsFontSize"
          :key="index"
          :value="optionFontSize.size"
        > {{ optionFontSize.text }} </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseOptions',
  data () {
    return {
      selectedWeight: '',
      selectedColor: '',
      selectedFontFamily: '',
      selectedFontSize: '',
      optionsWeight: [
        { text: '200', value: 200 },
        { text: '600', value: 600 }
      ],
      optionsColor: [
        { text: 'red', color: '#ff0000' },
        { text: 'green', color: '#008000' },
        { text: 'orange', color: '#ffa500' }
      ],
      optionsFontFamily: [
        { text: 'Trebuchet MS', font: 'Trebuchet MS' },
        { text: 'Gill Sans', font: 'Gill Sans' }
      ],
      optionsFontSize: [
        { text: '14', size: 14 },
        { text: '18', size: 18 },
        { text: '24', size: 24 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  span {
    font-size: 10px;
  }

</style>
