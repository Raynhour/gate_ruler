import { PLAYERS } from "@/presentation/composables/useGame";
import { Card } from "../entities/core/Card";

export interface TopDeckUseCaseContract {
  topdeck(player: PLAYERS): Promise<Card>;
}
