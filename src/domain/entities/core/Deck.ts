import { Card } from "./Card";
export interface Deck {
  cards: Card[];
}

export default class DeckE {
  readonly _deck: Deck;
  constructor(deck: Deck) {
    this._deck = deck;
  }

  deck() {
    return this._deck;
  }
}
