import Lobby from '../entities/lobby'

export interface DuelDeckUse {
  list: Lobby[]
  execute(): Lobby[]
}
