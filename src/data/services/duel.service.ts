import { Zone } from '@/domain/entities/core/zone'
import { PLAYERS } from '@/presentation/composables/useGame'
import ApiContractor from '../contractors/api.contractor'
import DuelRepoContract from '../contractors/duel.contract'
import { PATH_DUEL } from '../enums/apiPath.enum'

export default class DuelService implements DuelRepoContract {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  async session(id: number): Promise<any> {
    const res = await this.api.get(`${PATH_DUEL.SESSION}/${id}/`)
    return res
  }

  async zone(zone: Zone, index: number, player: PLAYERS): Promise<Zone> {
    const res = await this.api.post<Zone>(`${PATH_DUEL.ZONE}`, {
      zone, index, player
    })
    return res
  }
}
