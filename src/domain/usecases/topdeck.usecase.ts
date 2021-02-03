import { PLAYERS } from "@/presentation/composables/useGame";
import { TopDeckUseCaseContract } from "../contractors/topdeckUseCase.contract";
import { Card } from "../entities/core/Card";
import OptionAttack from "../entities/core/options/optionAttack";
import CardZone, { Zone } from "../entities/core/zone";

export default class TopDeckUseCase {
  private repo: TopDeckUseCaseContract;
  constructor(repo: TopDeckUseCaseContract) {
    this.repo = repo;
  }

  async topdeck(player: PLAYERS): Promise<Card> {
    let res = await this.repo.topdeck(player);
    return res;
  }
}
