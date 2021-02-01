<template lang="pug">
.deck
  zone-wrapper(
    ref="deck"
    isDefaultPosition
  )

  
</template>

<script lang="ts">
import { Deck } from "@/domain/entities/core/Deck";
import { defineComponent, PropType } from "vue";
import ZoneWrapper from "../global/Zone.vue";

export default defineComponent({
  props: {
    deck: Object as PropType<Deck>,
  },
  components: {
    ZoneWrapper,
  },
});
</script>

<style lang="scss">
.deck {
  width: 88px;
  height: 88px;
}
</style>
