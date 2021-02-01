<template lang="pug">
.action-zones
  .action-zones__column
    deck
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Deck from "@/presentation/components/duel/Deck.vue";

export default defineComponent({
  components: {
    Deck,
  },
});
</script>

<style lang="scss">
.action-zones {
  padding: 5px;
  display: flex;
  &__column {
  }
}
</style>
