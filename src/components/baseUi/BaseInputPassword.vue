<template>
  <div>
    <ComplexityPassword
      :passwordData="passwordData"
      class="complexity-password"
    />
    <div class="icon">
        <BaseIcon
          width="30"
          height="30"
          iconColor="#3fb984"
          @click="changeShow"
        >
          <component :is="changeIcon"></component>
        </BaseIcon>
      </div>
  </div>
</template>

<script>
import ComplexityPassword from '@/components/loader/ComplexityPassword'
import { EyeHide, EyeView } from '@/components/icon'
import BaseIcon from '@/components/baseUi/BaseIcon'

export default {
  name: 'BaseInputPassword',
  components: {
    ComplexityPassword,
    EyeHide,
    EyeView,
    BaseIcon
  },
  props: {
    passwordData: {
      type: [String, Number]
    },
    show: {
      type: Boolean,
      required: true
    },
    changeShow: {
      type: Function,
      required: true
    }
  },
  computed: {
    changeIcon () {
      return this.show ? EyeView : EyeHide
    },
    scorePassword () {
      let score = 0
      if (this.passwordData === '') return score

      var letters = {}
      for (let i = 0; i < this.passwordData.length; i++) {
        letters[this.passwordData[i]] = (letters[this.passwordData[i]] || 0) + 1
        score += 5.0 / letters[this.passwordData[i]]
      }

      const variations = {
        digits: /\d/.test(this.passwordData),
        lower: /[a-z]/.test(this.passwordData),
        upper: /[A-Z]/.test(this.passwordData),
        special: /\W/.test(this.passwordData)
      }

      let variationsCount = 0
      for (const check in variations) {
        variationsCount += (variations[check] === true) ? 1 : 0
      }

      score += (variationsCount - 1) * 10

      return parseInt(score)
    },
    // eslint-disable-next-line
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
    height: 5px;
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
    @include level(10px, 0, #BB4440)
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

  .complexity-password {
    position: absolute;
    bottom: -5px;
    left: 0;
    opacity: 0.8;
  }

  .icon-eye {
    cursor: pointer;
  }

  .icon {
    position: absolute;
    top: 5px;
    right: 40px;
  }
</style>
