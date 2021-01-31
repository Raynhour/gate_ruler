import PlayerZones from "@/domain/entities/core/playerView";
import { PLAYERS } from "@/presentation/composables/useGame";
import { PLAYER_VIEW_MOCK } from "../../../mocks/duel.mock";

describe("PlayerZonesSelect", () => {
  it("should unselect zones", () => {
    let _view = JSON.parse(JSON.stringify(PLAYER_VIEW_MOCK));
    _view.zone.attack[1].selected.player1 = true;
    let view = new PlayerZones(PLAYER_VIEW_MOCK);
    expect(
      view.unselected(PLAYERS.PLAYER1).zone.attack[1].selected.player1
    ).toBe(false);
  });
});
