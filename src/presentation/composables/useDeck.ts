import apiContractor from "@/data/contractors/api.contractor";
import DuelService from "@/data/services/__mocks__/duel.service";
import { Card } from "@/domain/entities/core/Card";
import TopDeckUseCase from "@/domain/usecases/topdeck.usecase";
import INJECTIONS from "@/utils/enums/injections.enum";
import { injection } from "@/utils/vue.utils";
import { PLAYERS } from "./useGame";

export default function (api: apiContractor) {
  const currentPlayer = injection<PLAYERS>(INJECTIONS.CURRENT_PLAYER);

  const topdeck = async (): Promise<Card> => {
    let topdeck = await new TopDeckUseCase(new DuelService(api)).topdeck(
      currentPlayer
    );
    return topdeck;
  };

  return { topdeck };
}
