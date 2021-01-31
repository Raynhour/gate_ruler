import { PLAYERS } from "@/presentation/composables/useGame";
import { View } from "../entities/core/view/view";
import { Zone } from "../entities/core/zone";

export interface SelectZoneContract {
  zone(zone: Zone, index: number, player: PLAYERS): Promise<Zone>;
  view(view: View, player: PLAYERS): Promise<View>;
}
