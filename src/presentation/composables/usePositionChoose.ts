import { CARD_POSITION } from '@/domain/entities/core/Card'
import CardZone from '@/domain/entities/core/zone'
import { computed, ComputedRef } from 'vue'

export default function(cardZone: ComputedRef<CardZone>) {
  const isDefaultPosition = computed(() => {
    return cardZone.value.zone.position === CARD_POSITION.DEFAULT
  })

  const isAttackPosition = computed(() => {
    return cardZone.value.zone.position === CARD_POSITION.ATTACK
  })

  return { isDefaultPosition, isAttackPosition }
}
