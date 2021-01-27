import { VIEW_LAYOUT } from '@/domain/entities/core/view/view'
import { Duel } from '@/domain/entities/duel'
import { CARD_POSITION, CARD_TYPE } from '@/domain/entities/core/Card'
import { ANY_CARD, CARD_MOCK_1 } from './card.mock'

export const duel: Duel = {
  player1: {
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
        
        1: {
          position: CARD_POSITION.DEFAULT,
          card: CARD_MOCK_1
        },
        2: {
          position: CARD_POSITION.DEFAULT,
          card: CARD_MOCK_1
        }
      },
      event: {
        1: {
          position: CARD_POSITION.DEFAULT,
          card: ANY_CARD
        }
      }
    },
    layout: VIEW_LAYOUT.DEFAULT
  },

  player2: {
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
        1: {
          position: CARD_POSITION.DEFAULT,
          card: CARD_MOCK_1
        },
        2: {
          position: CARD_POSITION.DEFAULT,
          card: CARD_MOCK_1
        }
      },
      event: {
        1: {
          position: CARD_POSITION.DEFAULT,
          card: ANY_CARD
        }
      }
    },
    layout: VIEW_LAYOUT.DEFAULT
  },

  turn: 0,
  id: 1
}
