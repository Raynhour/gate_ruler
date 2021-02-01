import apiContractor from "@/data/contractors/api.contractor";
import DuelService from "@/data/services/__mocks__/duel.service";
import { View } from "@/domain/entities/core/view/view";
import CardZone, { Zone } from "@/domain/entities/core/zone";
import SelectZoneUseCase from "@/domain/usecases/selectZone.usecase";
import INJECTIONS from "@/utils/enums/injections.enum";
import { InjectionView } from "@/utils/types";
import { injection } from "@/utils/vue.utils";
import { computed, ComputedRef, toRaw } from "vue";
import { changeUnitZone, changeView, PLAYERS } from "./useGame";

export default function (cardZone: ComputedRef<CardZone>, api: apiContractor) {
  const view = injection<View>(INJECTIONS.VIEW);
  const currentPlayer = injection<PLAYERS>(INJECTIONS.CURRENT_PLAYER);
  const select = async (player: PLAYERS, index: number) => {
    let selectUseCase = new SelectZoneUseCase(new DuelService(api));

    let unselectedView = selectUseCase.unselectAll(toRaw(view), currentPlayer);
    let zone = await selectUseCase.zone({
      cardZone: cardZone.value,
      index,
      player: currentPlayer,
    });

    changeView(unselectedView, currentPlayer);
    changeUnitZone(zone, player, index);
  };

  const player1Selected = computed(() => {
    return cardZone.value.zone.selected.player1;
  });

  const player2Selected = computed(() => {
    return cardZone.value.zone.selected.player2;
  });

  return { select, player1Selected, player2Selected };
}
