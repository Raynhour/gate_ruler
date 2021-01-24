<template lang="pug">
ZoneWrapper(
  :isRestPosition="isDefaultPosition"
)
</template>

<script lang="ts">
import { ANY_CARD } from '../../../../../tests/mocks/card.mock'
import { computed, defineComponent, PropType } from 'vue'
import CardZone, { Zone } from '@/domain/entities/core/zone'
import ZoneWrapper from '../../global/Zone.vue'
import usePositionChoose from '@/presentation/composables/usePositionChoose'

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
    let { isDefaultPosition } = usePositionChoose(cardZone)
    return { cardZone, isDefaultPosition }
  },

  components: {
    ZoneWrapper
  }
})
</script>

<style lang="scss"></style>
