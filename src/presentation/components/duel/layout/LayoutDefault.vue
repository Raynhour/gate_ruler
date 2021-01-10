<template lang="pug">
div default layout {{ player }}
  div
    unit-zones(:unitZones="player.zone.attack")
    
</template>

<script lang="ts">
import { View } from '@/domain/entities/core/view/view'
import { defineComponent, PropType } from 'vue'
import UnitZones from '@/presentation/components/duel/zone/UnitZones.vue'

export default defineComponent({
  props: {
    player: {
      required: true,
      type: Object as PropType<View>
    }
  },

  components: {
    UnitZones
  }
})
</script>
