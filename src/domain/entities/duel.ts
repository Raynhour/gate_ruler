import { View } from './core/view/view'

export interface Duel {
  player1: View
  player2: View
  turn: number
  id: number
}

export default class Game<T> {
  readonly data: T
  constructor(duel: T) {
    this.data = duel
  }

  duel(): T {
    return this.data
  }
}
