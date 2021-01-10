<template lang="pug">
div.zone TEST
  .zone__round
  .zone__field
</template>

<script lang="ts">
import { ANY_CARD } from '../../../../../tests/mocks/card.mock'
import { computed, defineComponent, PropType } from 'vue'
import CardZone, { Zone } from '@/domain/entities/core/zone'

export default defineComponent({
  props: {
    index: {
      required: true,
      type: Number
    },
    zone: {
      type: Object as PropType<Zone>,
      default: () => {
        return ANY_CARD
      }
    }
  },

  setup(props) {
    let cardZone = computed(() => {
      return new CardZone(props.zone)
    })
    return { cardZone }
  }
})
</script>

<style lang="scss">
.zone {
  position: relative;
  width: 150px;
  height: 150px;
  &__round {
    position: absolute;
    top: 0;
    transform: perspective(50em) rotateX(40deg);
    width: 150px;
    border: 1px solid $primary;
    border-radius: 50%;
    box-shadow: 0 0 10px 1px$primary;
    height: 150px;
  }
  &__field {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    transform: perspective(50em) rotateX(40deg);
    border: 1px solid $primary;
    width: 80px;
    height: 110px;
  }
}
</style>
