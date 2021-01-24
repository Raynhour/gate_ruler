<template lang="pug">
div
  div
    defaultZones(:unitZones="player.zone.attack")
    
</template>

<script lang="ts">
import { View } from '@/domain/entities/core/view/view'
import { defineComponent, PropType } from 'vue'
import DefaultZones from '@/presentation/components/duel/zone/DefaultZones.vue'

export default defineComponent({
  props: {
    player: {
      required: true,
      type: Object as PropType<View>
    }
  },

  components: {
    DefaultZones
  }
})
</script>
