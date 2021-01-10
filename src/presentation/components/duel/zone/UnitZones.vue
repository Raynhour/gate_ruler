<template lang="pug">
div
  unit-zone(:zone="unitZones[1]" :index="1")
  unit-zone(:zone="unitZones[1]" :index="1")
  unit-zone(:zone="unitZones[1]" :index="1")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UnitZone from './UnitZone.vue'

export default defineComponent({
  props: {
    unitZones: Object
  },
  components: {
    UnitZone
  }
})
</script>
