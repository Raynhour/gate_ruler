import apiContractor from "@/data/contractors/api.contractor";
import DuelService from "@/data/services/__mocks__/duel.service";
import CardZone, { Zone } from "@/domain/entities/core/zone";
import SelectZoneUseCase from "@/domain/usecases/selectZone.usecase";
import { computed, ComputedRef } from "vue";
import { changeUnitZone, PLAYERS } from "./useGame";

export default function (cardZone: ComputedRef<CardZone>, api: apiContractor) {
  const select = async (player: PLAYERS, index: number) => {
    let select = new SelectZoneUseCase(new DuelService(api));
    let zone = await select.zone({ cardZone: cardZone.value, player, index });
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
