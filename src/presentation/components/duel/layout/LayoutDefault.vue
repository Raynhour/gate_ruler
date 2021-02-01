<template lang="pug">
div
  div.duel-field
    defaultZones(:unitZones="player.zone.attack")
    actionZones
    
</template>

<script lang="ts">
import { View } from "@/domain/entities/core/view/view";
import { defineComponent, PropType } from "vue";
import DefaultZones from "@/presentation/components/duel/zone/DefaultZones.vue";
import ActionZones from "@/presentation/components/duel/zone/ActionZones.vue";

export default defineComponent({
  props: {
    player: {
      required: true,
      type: Object as PropType<View>,
    },
  },

  components: {
    DefaultZones,
    ActionZones,
  },
});
</script>

<style lang="scss">
.duel-field {
  display: flex;
}
</style>
