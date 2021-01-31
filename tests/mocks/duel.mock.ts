import { VIEW_LAYOUT } from "@/domain/entities/core/view/view";
import { Duel } from "@/domain/entities/duel";
import { CARD_POSITION, CARD_TYPE } from "@/domain/entities/core/Card";
import { ANY_CARD, CARD_MOCK_1 } from "./card.mock";

export const UNIT_ZONE_MOCK = {
  position: CARD_POSITION.DEFAULT,
  card: CARD_MOCK_1,
  selected: {
    player1: false,
    player2: false,
  },
};

export const UNIT_ZONE_SELECTED_PLAYER1_MOCK = {
  position: CARD_POSITION.DEFAULT,
  card: CARD_MOCK_1,
  selected: {
    player1: true,
    player2: false,
  },
};

export const PLAYER_VIEW_MOCK = {
  grave: {},
  banish: {},
  hand: [],
  card_on_fields: [],
  field: [],
  trigger_zone: [],
  deck: [],
  energy: [],
  ruler: {},
  zone: {
    attack: {
      1: UNIT_ZONE_MOCK,
      2: UNIT_ZONE_MOCK,
    },
    event: {
      1: UNIT_ZONE_MOCK,
    },
  },
  layout: VIEW_LAYOUT.DEFAULT,
};

export const duel: Duel = {
  player1: PLAYER_VIEW_MOCK,

  player2: PLAYER_VIEW_MOCK,

  turn: 0,
  id: 1,
};

export const UNIT_ZONE_MOCK_REST = {
  position: CARD_POSITION.ATTACK,
  card: CARD_MOCK_1,
  selected: {
    player1: false,
    player2: false,
  },
};
