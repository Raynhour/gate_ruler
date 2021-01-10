import { Card } from '../Card'
import { Zone } from '../zone'

export enum VIEW_LAYOUT {
  DEFAULT = 'default'
}

export interface View {
  grave: any
  deck: any
  hand: any
  banish: any
  field: any
  card_on_fields: any
  zone: {
    attack: {
      [hashmap: number]: Zone
    }
    event: {
      [hashmap: number]: Zone
    }
  }
  ruler: any
  trigger_zone: any
  energy: any
  layout: VIEW_LAYOUT
}
