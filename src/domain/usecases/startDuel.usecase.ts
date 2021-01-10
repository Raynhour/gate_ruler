import DuelRepoContract from '@/data/contractors/duel.contract'
import StartDuelUse from '../contractors/startDuelUse.contract'
import Game, { Duel } from '../entities/duel'

export default class StartDuelUseCase implements StartDuelUse<Duel> {
  repo: DuelRepoContract
  constructor(repo: DuelRepoContract) {
    this.repo = repo
  }

  async duel(id: number): Promise<Duel> {
    const duel = await this.repo.session(id)
    const list = new Game<Duel>(duel).duel()
    return list
  }
}
