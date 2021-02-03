<template lang="pug">
.deck
  zone-wrapper(
    ref="deck"
    @click="drawTopdeck"
  )
  modal(ref="deckView")
  
</template>

<script lang="ts">
import { Deck } from "@/domain/entities/core/Deck";
import useDeck from "@/presentation/composables/useDeck";
import { defineComponent, PropType, ref } from "vue";
import ZoneWrapper from "../global/Zone.vue";
import Modal from "../global/Modal.vue";
import { Card } from "@/domain/entities/core/Card";
import { injection } from "@/utils/vue.utils";
import { InjectionType } from "@/utils/types";
import INJECTIONS from "@/utils/enums/injections.enum";

export default defineComponent({
  props: {
    deck: Array as PropType<Card[]>,
  },

  setup(props, { emit }) {
    const deckView = ref<typeof Modal | null>(null);
    let { api } = injection<InjectionType>(INJECTIONS.API);
    const deck = useDeck(api.value);

    const drawTopdeck = () => {
      deck.topdeck().then((card) => emit("topdeck", card));
    };

    return { deckView, drawTopdeck };
  },
  components: {
    ZoneWrapper,
    Modal,
  },
});
</script>

<style lang="scss">
.deck {
  width: 88px;
  height: 88px;
}
</style>
