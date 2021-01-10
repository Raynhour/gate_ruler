import ApiContractor from '../contractors/api.contractor'
import LobbyRepo from '../contractors/lobbies.repo.contractor'
import { API_PATH_LOBBY } from '../enums/apiPath.enum'

export default class LobbyService implements LobbyRepo {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  public async list(query: any): Promise<any> {
    const res = await this.api.get(API_PATH_LOBBY, query)
    return res
  }
}
