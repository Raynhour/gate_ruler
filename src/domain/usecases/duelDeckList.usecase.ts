import DuelDeckRepo from '@/data/contractors/duelDeck'
import BaseUseCase from '../contractors/baseUseCase.contractor'
export default class LoadLobbyUseCase implements BaseUseCase {
  repo: DuelDeckRepo
  constructor(repo: DuelDeckRepo) {
    this.repo = repo
  }

  async output() {
    return await this.repo.list()
  }
}
