<template lang="pug">
div.zones
  .zone-wrapper
    unit-zone(:zone="unitZones[1]" :index="1")
  .zone-wrapper
    defense-zone(:zone="unitZones[1]" :index="1")
  .zone-wrapper
    unit-zone(:zone="unitZones[1]" :index="1")
  .zone-ruler
    ruler-zone(:zone="unitZones[1]" :index="1")

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UnitZone from './UnitZone.vue'
import DefenseZone from './DefenseZone.vue'
import RulerZone from './RulerZone.vue'

export default defineComponent({
  props: {
    unitZones: Object
  },
  components: {
    UnitZone,
    DefenseZone,
    RulerZone
  }
})
</script>

<style lang="scss">
$row-width: 600px;
.zones {
  width: 40%;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  .zone-wrapper {
    width: 28%;
    margin: 5px;
  }
  .zone-ruler {
    width: 30%;
  }
}
</style>
