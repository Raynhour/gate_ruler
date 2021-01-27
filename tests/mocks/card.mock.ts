import { CARD_POSITION, CARD_TYPE } from '@/domain/entities/core/Card'

export const CARD_MOCK_1 = {
  position: CARD_POSITION.DEFAULT,
  category: CARD_TYPE.UNIT,
  img: 'https://gaterealize.com/img/misc/0/MD-05.png'
}

export const ANY_CARD = {
  position: CARD_POSITION.DEFAULT,
  category: CARD_TYPE.ANY
}
