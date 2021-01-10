import ZoneAttack, {
  ZONE_ATTACK_DEFAULT_OPTIONS
} from '@/domain/entities/core/zoneAttack'
import { ANY_CARD, CARD_MOCK_1 } from '../../mocks/card.mock'

describe('Attack zone', () => {
  describe('When no card in zone', () => {
    it('Then options hidding', () => {
      const zoneAttack = new ZoneAttack(0, ANY_CARD)
      expect(zoneAttack.options()).toHaveLength(0)
    })
  })

  describe('When card in zone', () => {
    it('Then i expect to see default options', () => {
      const zoneAttack = new ZoneAttack(0, CARD_MOCK_1)
      expect(zoneAttack.options()).toHaveLength(
        ZONE_ATTACK_DEFAULT_OPTIONS.length
      )
    })
  })
})
