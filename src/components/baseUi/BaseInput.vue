<template>
  <div>
    <label :for="name">
      {{ label }}
    </label>
    <div class="wrapper">
      <input
        class="form-control base-inut"
        :class="{'is-invalid': invalid}"
        :type="show ? 'text' : inputType"
        v-bind="$attrs"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      >
      <ComplexityPassword
        :passwordData="passwordData"
        class="complexity-password"
        v-if="type === 'password'"
      />
      <slot />
      <div v-if="type === 'password'" class="icon">
        <BaseIcon
          width="30"
          height="30"
          iconName="view"
          iconColor="#3fb984"
          v-if="show"
          @click="show = !show"
          class="icon-eye"
        >
          <EyeView />
        </BaseIcon>
        <BaseIcon
          width="30"
          height="30"
          iconName="hide"
          iconColor="#a10000"
          v-else
          @click="show = !show"
          class="icon-eye"
        >
          <EyeHide/>
        </BaseIcon>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/baseUi/BaseIcon'
import { EyeHide, EyeView } from '@/components/icon'
import ComplexityPassword from '@/components/loader/ComplexityPassword'

export default {
  name: 'BaseInput',
  components: {
    BaseIcon,
    EyeHide,
    EyeView,
    ComplexityPassword
  },
  inheritAttrs: false,
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
    },
    invalid: {
      type: Boolean,
      default: false
    },
    passwordData: {
      type: [String, Number]
    }
  },
  data () {
    return {
      show: false,
      inputType: this.type
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-eye {
    cursor: pointer;
  }

  .wrapper {
    position: relative;
  }

  .icon {
    position: absolute;
    top: 5px;
    right: 40px;
  }

  .complexity-password {
    position: absolute;
    bottom: -5px;
    left: 0;
    opacity: 0.8;
  }

  .base-inut {
    padding-right: 72px;
  }
</style>
