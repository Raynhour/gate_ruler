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
}
