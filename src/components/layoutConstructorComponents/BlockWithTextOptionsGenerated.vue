<template>
  <div class="block-options">
    <ul class="block-options__list">
      <li
        class="block-options__item"
        v-for="item in items"
        :key="item.title"
      >
        <p class="block-options__title">{{ item.title }}</p>
        <span class="block-options__info">
          {{ item.value === '' ? item.defaultValue : item.value }}
          {{ item.valueSubjects === 'image-men-t-shirt.jpg' ? item.men : item.women }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'BlockWithTextOptionsGenerated',
  props: {
    getPrintText: {
      type: String,
      required: true
    },
    getTextRotate: {
      type: String,
      required: true
    },
    getTextPositionX: {
      type: String,
      required: true
    },
    getTextPositionY: {
      type: String,
      required: true
    },
    getSelectedFonts: {
      type: String,
      required: true
    },
    getSelectedColor: {
      type: String,
      required: true
    },
    getSelectedSize: {
      type: [String, Number],
      required: true
    },
    getTypeSubjects: {
      type: String,
      required: true
    }
  },
  computed: {
    items () {
      return [
        { title: 'Текст: ', value: this.getPrintText },
        { title: 'Угол: ', value: this.getTextRotate },
        { title: 'Координата X: ', value: this.getTextPositionX },
        { title: 'Координата Y: ', value: this.getTextPositionY },
        { title: 'Шрифт: ', value: this.getSelectedFonts, defaultValue: 'Шрифт не выбран' },
        { title: 'Цвет текста: ', value: this.getSelectedColor },
        { title: 'Размер текста: ', value: this.getSelectedSize },
        { title: 'Тип: ', valueSubjects: this.getTypeSubjects, men: 'Men', women: 'Women' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .block-options__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .block-options__title {
    margin: 0;
    font-weight: bold;
  }

  .block-options__item {
    display: flex;
  }

  .block-options__info {
    color: #ffffff;
    margin-left: 10px;
  }
</style>
