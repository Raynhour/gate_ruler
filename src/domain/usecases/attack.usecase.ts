import { PLAYERS } from '@/presentation/composables/useGame'
import { AttackUseCaseContract } from '../contractors/attackUseCase.contract'
import OptionAttack from '../entities/core/options/optionAttack'
import CardZone, { Zone } from '../entities/core/zone'

export default class AttackUseCase {
  private repo: AttackUseCaseContract
  constructor(repo: AttackUseCaseContract) {
    this.repo = repo
  }

  async zone(cardZone: CardZone, index: number, player: PLAYERS): Promise<Zone> {
    let changedZone = new OptionAttack(cardZone, cardZone.zone.card).output()
    let res = await this.repo.zone(changedZone, index, player)
    return res
  }
}
