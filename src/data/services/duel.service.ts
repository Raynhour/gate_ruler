import ApiContractor from '../contractors/api.contractor'
import DuelRepoContract from '../contractors/duel.contract'
import { PATH_DUEL } from '../enums/apiPath.enum'

export default class DuelService implements DuelRepoContract {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  public async session(id: number): Promise<any> {
    const res = await this.api.get(`${PATH_DUEL.SESSION}/${id}/`)
    return res
  }
}
