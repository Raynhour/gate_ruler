import { Card, CARD_POSITION, CARD_TYPE } from "./Card";

export interface Zone {
  position: CARD_POSITION;
  card: Card;
  selected: {
    player1: boolean;
    player2: boolean;
  };
}

export interface CardZoneContract {
  changedZone<val>(value: val): Zone;
}

export default class CardZone implements CardZoneContract {
  readonly zone: Zone;
  constructor(zone: Zone) {
    this.zone = zone;
  }

  empty(): boolean {
    if (!this.zone.card.category || this.zone.card.category === CARD_TYPE.ANY)
      return true;
    return false;
  }

  changedZone(value: Partial<Zone>): Zone {
    return { ...this.zone, ...value };
  }
}
