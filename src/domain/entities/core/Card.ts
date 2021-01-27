export enum CARD_TYPE {
  ANY = 'ANY',
  UNIT = 'UNIT'
}

export enum CARD_POSITION {
  ATTACK = 'ATTACK',
  DEFAULT = 'DEFAULT'
}

export interface CardAttrs {
  position?: CARD_POSITION
  img?: string
}

export interface Card extends CardAttrs {
  category: CARD_TYPE
}

// export class AnyCard implements Card {
//   readonly category: CARD_TYPE
//   readonly data: CardAttrs
//   constructor(data: CardAttrs) {
//     this.category = CARD_TYPE.ANY
//     this.data = data
//   }

//   empty() {
//     return true
//   }

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   changeCard(attr: CardAttrs) {
//     return this
//   }
// }

// export default class CARD implements Card {
//   readonly category: CARD_TYPE
//   readonly data: CardAttrs
//   constructor(category: CARD_TYPE, data: CardAttrs) {
//     this.category = category
//     this.data = data
//   }

//   empty() {
//     return false
//   }

//   changeCard(attr: CardAttrs) {
//     return this
//   }
// }
export class Change {
  readonly _card: Card
  constructor(card: Card) {
    this._card = card
  }

  card(attrs: CardAttrs): Card {
    return {
      ...this._card,
      ...attrs
    }
  }
}
