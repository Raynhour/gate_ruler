import { PLAYERS } from "@/presentation/composables/useGame";
import { ChangeZonePositionUseCaseContract } from "../contractors/changeZonePositionUseCase.contract";
import { CARD_POSITION } from "../entities/core/Card";
import CardZone, { Zone } from "../entities/core/zone";

export default class ChangeZoneUseCase {
  private repo: ChangeZonePositionUseCaseContract;
  constructor(repo: ChangeZonePositionUseCaseContract) {
    this.repo = repo;
  }

  async zone({
    cardZone,
    index,
    player,
    position,
  }: {
    cardZone: CardZone;
    index: number;
    player: PLAYERS;
    position: CARD_POSITION;
  }): Promise<Zone> {
    let changedZone = cardZone.changedZone({ position: position });
    let res = await this.repo.zone(changedZone, index, player);
    return res;
  }
}
