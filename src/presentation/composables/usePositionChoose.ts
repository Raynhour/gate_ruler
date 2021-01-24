import CardZone from '@/domain/entities/core/zone'
import { computed, ComputedRef } from 'vue'

export default function(cardZone: ComputedRef<CardZone>) {
  const isDefaultPosition = computed(() => {
    return cardZone.value.zone.position
  })

  return { isDefaultPosition }
}
