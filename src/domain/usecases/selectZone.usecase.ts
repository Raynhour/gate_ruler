import { PLAYERS } from "@/presentation/composables/useGame";
import { SelectZoneContract } from "../contractors/selectZoneUseCase.contract";
import { CARD_POSITION } from "../entities/core/Card";
import PlayerView from "../entities/core/playerView";
import SelectZone from "../entities/core/selectZone";
import { View } from "../entities/core/view/view";
import CardZone, { Zone } from "../entities/core/zone";

export default class SelectZoneUseCase {
  private repo: SelectZoneContract;
  constructor(repo: SelectZoneContract) {
    this.repo = repo;
  }

  public async zone({
    cardZone,
    index,
    player,
  }: {
    cardZone: CardZone;
    index: number;
    player: PLAYERS;
  }): Promise<Zone> {
    let selectedZone = new SelectZone(cardZone).zone(player);
    let res = await this.repo.zone(selectedZone, index, player);
    return res;
  }

  unselectAll(view: View, player: PLAYERS): View {
    let _view = new PlayerView(view).unselected(player);
    this.repo.view(view, player);
    return _view;
  }
}
