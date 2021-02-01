import ApiContractor from "@/data/contractors/api.contractor";
import DuelService from "@/data/services/__mocks__/duel.service";
import { CARD_POSITION } from "@/domain/entities/core/Card";
import { View } from "@/domain/entities/core/view/view";
import { Zone } from "@/domain/entities/core/zone";
import { Duel } from "@/domain/entities/duel";
import StartDuelUseCase from "@/domain/usecases/startDuel.usecase";
import { reactive, toRefs } from "vue";

const state = reactive({
  duel: {} as Duel,
  loading: false,
});

export default function (api: ApiContractor) {
  const start = async (id: number) => {
    try {
      state.loading = true;
      let res = await new StartDuelUseCase(new DuelService(api)).duel(id);
      state.duel = res;
    } catch (error) {
      console.log(error);
      console.log("err");
    } finally {
      state.loading = false;
    }
  };

  return { ...toRefs(state), start };
}

export enum PLAYERS {
  PLAYER1 = "player1",
  PLAYER2 = "player2",
}

export function changeUnitZone(zone: Zone, player: PLAYERS, index: number) {
  state.duel[player].zone.attack[index] = zone;
}

export function changeView(view: View, player: PLAYERS) {
  state.duel[player] = view;
}
