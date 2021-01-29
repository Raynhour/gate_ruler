import { PLAYERS } from "@/presentation/composables/useGame";
import { SelectZoneContract } from "../contractors/selectZoneUseCase.contract";
import { CARD_POSITION } from "../entities/core/Card";
import SelectZone from "../entities/core/selectZone";
import CardZone, { Zone } from "../entities/core/zone";

export default class SelectZoneUseCase {
  private repo: SelectZoneContract;
  constructor(repo: SelectZoneContract) {
    this.repo = repo;
  }

  async zone({
    cardZone,
    index,
    player,
  }: {
    cardZone: CardZone;
    index: number;
    player: PLAYERS;
    position: CARD_POSITION;
  }): Promise<Zone> {
    let selectedZone = new SelectZone(cardZone).zone(player);
    let res = await this.repo.zone(selectedZone, index, player);
    return res;
  }
}
