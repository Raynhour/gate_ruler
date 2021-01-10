<template lang="pug">
.lobby
  .lobby__title {{ item.title }}
  .lobby__name name
</template>

<script lang="ts">
import Lobby from '@/domain/entities/lobby'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as () => Lobby
    }
  }
})
</script>

<style lang="scss">
.lobby {
  padding: 5px;
  font-family: $font;
  border-bottom: 1px solid #000;
  background-color: rgba($primary, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba($primary, 1);
  }
  &__title {
    font-weight: bold;
  }
}
</style>
