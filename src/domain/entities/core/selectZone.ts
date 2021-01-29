import { PLAYERS } from "@/presentation/composables/useGame";
import CardZone, { Zone } from "./zone";

export default class SelectZone {
  private cardZone: CardZone;
  constructor(cardZone: CardZone) {
    this.cardZone = cardZone;
  }

  zone(player: PLAYERS): Zone {
    let selected = { ...this.cardZone.zone.selected };
    selected[player] = !selected[player];
    return this.cardZone.changedZone({ selected });
  }
}
