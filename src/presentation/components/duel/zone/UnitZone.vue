<template lang="pug">
ZoneWrapper(
  ref="zoneLink"
  :isDefaultPosition="isDefaultPosition"
  :isRestPosition="isAttackPosition"
  :player1Selected="player1Selected"
  :player2Selected="player2Selected"
  :card="zone.card"
  @click="selectHandler"
)
</template>

<script lang="ts">
import { ANY_CARD } from "../../../../../tests/mocks/card.mock";
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import CardZone, { Zone } from "@/domain/entities/core/zone";
import ZoneWrapper from "../../global/Zone.vue";
import usePositionChoose from "@/presentation/composables/usePositionChoose";
import useSelect from "@/presentation/composables/useSelectZone";
import { changeUnitZone, PLAYERS } from "@/presentation/composables/useGame";
import DuelService from "@/data/services/__mocks__/duel.service";
import { injection } from "@/utils/vue.utils";
import INJECTIONS from "@/utils/enums/injections.enum";
import { InjectionType } from "@/utils/types";
import ChangeZoneUseCase from "@/domain/usecases/changeZonePosition.usecase";
import { CARD_POSITION } from "@/domain/entities/core/Card";
import * as _ from "lodash";
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
    console.log(_.deepClone);
    let cardZone = computed(() => {
      return new CardZone(props.zone);
    });

    let { api } = injection<InjectionType>(INJECTIONS.API);

    let { isDefaultPosition, isAttackPosition } = usePositionChoose(cardZone);
    let select = useSelect(cardZone, api.value);
    const selectHandler = function () {
      select.select(player, props.index);
    };
    let togglePositon = async function () {
      try {
        let zone = await new ChangeZoneUseCase(new DuelService(api.value)).zone(
          {
            cardZone: cardZone.value,
            index: props.index,
            player,
            position:
              cardZone.value.zone.position === CARD_POSITION.ATTACK
                ? CARD_POSITION.DEFAULT
                : CARD_POSITION.ATTACK,
          }
        );
        changeUnitZone(zone, player, props.index);
      } catch (error) {
        console.log(error);
      }
    };
    const zoneLink = ref<typeof ZoneWrapper>();
    onMounted(() => {
      console.log(props.zone);
      if (!zoneLink.value) return;
      zoneLink.value.$el.addEventListener(
        "contextmenu",
        function (e: Event) {
          e.preventDefault();
          togglePositon();
        },
        false
      );
    });
    return {
      cardZone,
      isDefaultPosition,
      isAttackPosition,
      togglePositon,
      zoneLink,
      ...select,
      selectHandler,
    };
  },

  components: {
    ZoneWrapper,
  },
});
</script>

<style lang="scss"></style>
