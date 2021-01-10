import { Card, CARD_POSITION, Change } from '../Card'
import CardZone, { Zone } from '../zone'
// import { ZoneAttackContract } from '../zoneAttack'
import { Option } from './option'

export default class AttackOption implements Option {
  readonly zone: CardZone
  readonly change: Change
  constructor(zone: CardZone, card: Card) {
    this.zone = zone
    this.change = new Change(card)
  }

  output(): Zone {
    return this.zone.changedZone({ position: CARD_POSITION.ATTACK })
  }
}
