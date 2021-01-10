import { User } from './user'

export default interface Lobby {
  id: number
  title: string
  user: User
}

export default class Lobby {
  list: Lobby[]
  constructor(list: Lobby[]) {
    this.list = list
  }

  execute() {
    return this.list
  }
}
