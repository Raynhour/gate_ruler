import { Card, CARD_POSITION, CARD_TYPE } from './Card'
import { OptionMenu } from './options/option'

// export interface Zone {
//   index: number
//   card: Card
//   options(): OptionMenu[]
//   cardChanged(card: Card): Zone
// }

// export class ZoneCard {
//   readonly card: Card
//   constructor(card: Card) {
//     this.card = card
//   }

//   empty(): boolean {
//     if (!this.card.category || this.card.category === CARD_TYPE.ANY) return true
//     return false
//   }
// }

export interface Zone {
  position: CARD_POSITION
  card: Card
}

export default class CardZone {
  readonly zone: Zone
  constructor(zone: Zone) {
    this.zone = zone
  }

  empty(): boolean {
    if (!this.zone.card.category || this.zone.card.category === CARD_TYPE.ANY)
      return true
    return false
  }

  changedZone(value: Partial<Zone>): Zone {
    return { ...this.zone, ...value }
  }
}
