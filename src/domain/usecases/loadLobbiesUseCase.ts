import LobbyRepo from '@/data/contractors/lobbies.repo.contractor'
import BaseUseCase from '../contractors/baseUseCase.contractor'
import Lobby from '../entities/lobby'

export default class LoadLobbyUseCase implements BaseUseCase {
  repo: LobbyRepo
  constructor(repo: LobbyRepo) {
    this.repo = repo
  }

  async output() {
    const res = await this.repo.list()
    const list = new Lobby(res).execute()
    return list
  }
}
