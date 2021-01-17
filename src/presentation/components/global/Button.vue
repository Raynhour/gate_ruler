<template lang="pug">
button(
  :disabled="disabled"
  :type="type"
  :class="{'btn_large': large}"
  @click="$emit('click')"
).btn
  slot
</template>

<script lang="ts">
import { ButtonType } from '@/utils/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    large: Boolean,
    disabled: Boolean,
    type: String as PropType<ButtonType>
  }
})
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  font-family: $font-title;
  color: #fff;
  width: 250px;
  height: 40px;
  font-size: 16px;
  background-color: $primary;
  outline: none;
  border-color: $primary;
  border-radius: 5px;
  &_large {
    font-size: 21px;
    height: 60px;
  }
}
</style>
