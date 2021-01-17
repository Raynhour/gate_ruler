<template lang="pug">
div.field
  .field__label {{ label }}
  input(
    :type="type"
    :value="modelValue"
    @input="onType"
  )
</template>

<script lang="ts">
import { CustomEvent } from '@/utils/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      required: true,
      type: [String, Number]
    },
    label: String,
    type: {
      type: String,
      default: 'text'
    }
  },

  setup(props, { emit }) {
    function onType(e: CustomEvent) {
      emit('update:modelValue', e.target.value)
    }

    return { onType }
  }
})
</script>

<style lang="scss">
.field {
}
</style>
