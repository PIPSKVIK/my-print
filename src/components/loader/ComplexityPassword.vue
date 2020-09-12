<template>
  <div class="complexity" :class="'level_' + strengthLevel">
  </div>
</template>

<script>
export default {
  name: 'ComplexityPassword',
  props: {
    password: {
      type: [String, Number]
    }
  },
  computed: {
    scorePassword () {
      let score = 0
      if (this.password === '') return score

      var letters = {}
      for (let i = 0; i < this.password.length; i++) {
        letters[this.password[i]] = (letters[this.password[i]] || 0) + 1
        score += 5.0 / letters[this.password[i]]
      }

      var variations = {
        digits: /\d/.test(this.password),
        lower: /[a-z]/.test(this.password),
        upper: /[A-Z]/.test(this.password),
        special: /\W/.test(this.password)
      }

      let variationsCount = 0
      for (var check in variations) {
        variationsCount += (variations[check] === true) ? 1 : 0
      }

      score += (variationsCount - 1) * 10

      return parseInt(score)
    },
    // eslint-disable-next-line vue/return-in-computed-property
    strengthLevel () {
      const pass = this.scorePassword
      if (pass === 0) return 0
      if (pass < 25) return 1
      if (pass < 50) return 2
      if (pass < 75) return 3
      if (pass >= 75) return 4
    }
  }
}
</script>

<style lang="scss">
  .complexity {
    position: absolute;
    bottom: 10px;
    left: 0;
    display: block;
    height: 10px;
    width: 25%;
    background-color: #a5bf41;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s linear;
    z-index: 9;
  }

  @mixin level($position, $width, $color) {
    bottom: $position;
    width: $width;
    background-color: $color;
  }

  .level_0 {
    @include level(10px, 25%, #BB4440)
  }

  .level_1 {
    @include level(10px, 25%, #bb4440)
  }

  .level_2 {
    @include level(10px, 50%, #e17d30)
  }

  .level_3 {
    @include level(10px, 75%, #f0b03f)
  }

  .level_4 {
    @include level(10px, 100%, #a5bf41)
  }
</style>
