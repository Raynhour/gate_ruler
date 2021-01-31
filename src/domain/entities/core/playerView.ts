import { PLAYERS } from "@/presentation/composables/useGame";
import { View } from "./view/view";

export default class PlayerView {
  private view: View;
  constructor(view: View) {
    this.view = view;
  }

  unselected(player: PLAYERS): View {
    let view = JSON.parse(JSON.stringify(this.view));
    for (let zoneID in this.view.zone.attack) {
      view.zone.attack[zoneID].selected[player] = false;
    }
    return view;
  }
}
