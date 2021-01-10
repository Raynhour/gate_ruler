import ApiContractor from '../../contractors/api.contractor'
import LobbyRepo from '../../contractors/lobbies.repo.contractor'
import lobbies from '@mocks/lobby.mock'

export default class LobbyService implements LobbyRepo {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  public async list(query?: any): Promise<any> {
    return Promise.resolve(lobbies)
  }
}
