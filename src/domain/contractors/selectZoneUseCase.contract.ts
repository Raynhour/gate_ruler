import { PLAYERS } from "@/presentation/composables/useGame";
import { Zone } from "../entities/core/zone";

export interface SelectZoneContract {
  zone(zone: Zone, index: number, player: PLAYERS): Promise<Zone>;
}
