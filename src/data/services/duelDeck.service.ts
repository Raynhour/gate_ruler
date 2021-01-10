import ApiContractor from '../contractors/api.contractor'
import LobbyRepo from '../contractors/lobbies.repo.contractor'
import { API_PATH_LOBBY, PATH_DUEL } from '../enums/apiPath.enum'

export default class LobbyService implements LobbyRepo {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  public async list(query: any): Promise<any> {
    const res = await this.api.get(PATH_DUEL.DECK, query)
    return res
  }
}
