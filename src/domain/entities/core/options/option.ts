import { Card } from '../Card'
import CardZone, { Zone } from '../zone'

export interface OptionMenu {
  label: string
  option: OptionInstance
}

export interface OptionInstance {
  new (zone: Zone, card: Card): Option
}

export interface Option {
  zone: CardZone
}
