import { Zone } from '@/domain/entities/core/zone'
import { PLAYERS } from '@/presentation/composables/useGame'
import { duel } from '../../../../tests/mocks/duel.mock'
import ApiContractor from '../../contractors/api.contractor'
import DuelRepoContract from '../../contractors/duel.contract'

export default class DuelService implements DuelRepoContract {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  public async session(id: number): Promise<any> {
    return Promise.resolve(duel)
  }

  async zone(zone: Zone, index: number, player: PLAYERS): Promise<Zone> {
    return Promise.resolve(zone)
  }
}
