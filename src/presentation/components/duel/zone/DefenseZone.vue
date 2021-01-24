<template lang="pug">
ZoneWrapper(
  isRestPosition
)
</template>

<script lang="ts">
import { ANY_CARD } from '../../../../../tests/mocks/card.mock'
import { computed, defineComponent, PropType } from 'vue'
import CardZone, { Zone } from '@/domain/entities/core/zone'
import ZoneWrapper from '../../global/Zone.vue'

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
  },

  components: {
    ZoneWrapper
  }
})
</script>

<style lang="scss"></style>
