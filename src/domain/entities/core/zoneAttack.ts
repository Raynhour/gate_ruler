// import { Card, CARD_POSITION, Change } from './Card'
// import { Option, OptionMenu } from './options/option'
// import Options, { OPTIONS } from './options/options'
// import { Zone, ZoneCard } from './zone'

// export interface ZoneAttackContract extends Zone {
//   cardAttacked?(): Zone
//   position?(): CARD_POSITION
// }

// export const ZONE_ATTACK_DEFAULT_OPTIONS: OPTIONS[] = [OPTIONS.ATTACK]

// export default class ZoneAttack implements ZoneAttackContract {
//   readonly index: number
//   readonly card: Card
//   readonly defaultOptions: Options
//   constructor(index: number, card: Card) {
//     this.index = index
//     this.card = card
//     this.defaultOptions = new Options(ZONE_ATTACK_DEFAULT_OPTIONS)
//   }

//   options(): OptionMenu[] {
//     if (new ZoneCard(this.card).empty()) return []
//     return this.defaultOptions.list()
//   }

//   cardChanged(card: Card): Zone {
//     return new ZoneAttack(this.index, card)
//   }

//   // cardAttacked(): Zone {
//   //   let card = new Change(this.card).card({ position: CARD_POSITION.ATTACK })
//   //   return new ZoneAttack(this.index, card)
//   // }
// }
