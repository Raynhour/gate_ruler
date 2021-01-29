import SelectZone from "@/domain/entities/core/selectZone";
import CardZone from "@/domain/entities/core/zone";
import { PLAYERS } from "@/presentation/composables/useGame";
import {
  UNIT_ZONE_MOCK,
  UNIT_ZONE_SELECTED_PLAYER1_MOCK,
} from "../../../mocks/duel.mock";

describe("SelectZone", () => {
  it("should select", () => {
    let select = new SelectZone(new CardZone(UNIT_ZONE_MOCK));
    let zone = select.zone(PLAYERS.PLAYER1);
    expect(zone.selected[PLAYERS.PLAYER1]).toBe(true);
  });

  it("should unselect", () => {
    let select = new SelectZone(new CardZone(UNIT_ZONE_SELECTED_PLAYER1_MOCK));
    let zone = select.zone(PLAYERS.PLAYER1);
    expect(zone.selected[PLAYERS.PLAYER1]).toBe(false);
  });
});
