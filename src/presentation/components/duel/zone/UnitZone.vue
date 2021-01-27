<template lang="pug">
ZoneWrapper(
  ref="zoneLink"
  :isDefaultPosition="isDefaultPosition"
  :isRestPosition="isAttackPosition"
  :card="zone.card"
)
</template>

<script lang="ts">
import { ANY_CARD } from "../../../../../tests/mocks/card.mock";
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import CardZone, { Zone } from "@/domain/entities/core/zone";
import ZoneWrapper from "../../global/Zone.vue";
import usePositionChoose from "@/presentation/composables/usePositionChoose";
import { changeUnitZone, PLAYERS } from "@/presentation/composables/useGame";
import AttackUseCase from "@/domain/usecases/attack.usecase";
import DuelService from "@/data/services/__mocks__/duel.service";
import { injection } from "@/utils/vue.utils";
import INJECTIONS from "@/utils/enums/injections.enum";
import { InjectionType } from "@/utils/types";

export default defineComponent({
  props: {
    index: {
      required: true,
      type: Number,
    },
    zone: {
      type: Object as PropType<Zone>,
      default: () => {
        return ANY_CARD;
      },
    },
  },

  setup(props) {
    const player = PLAYERS.PLAYER1;

    let cardZone = computed(() => {
      return new CardZone(props.zone);
    });

    let { api } = injection<InjectionType>(INJECTIONS.API);

    let { isDefaultPosition, isAttackPosition } = usePositionChoose(cardZone);
    let attack = async function () {
      try {
        let zone = await new AttackUseCase(new DuelService(api.value)).zone(
          cardZone.value,
          props.index,
          player
        );

        changeUnitZone(zone, player, props.index);
      } catch (error) {
        console.log(error);
      }
    };
    const zoneLink = ref<typeof ZoneWrapper>();
    onMounted(() => {
      if (!zoneLink.value) return;
      zoneLink.value.$el.addEventListener(
        "contextmenu",
        function (e: Event) {
          e.preventDefault();
          attack();
        },
        false
      );
    });
    return { cardZone, isDefaultPosition, isAttackPosition, attack, zoneLink };
  },

  components: {
    ZoneWrapper,
  },
});
</script>

<style lang="scss"></style>
