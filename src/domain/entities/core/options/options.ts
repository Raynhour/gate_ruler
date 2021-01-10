import { OptionMenu } from './option'
import AttackOption from './optionAttack'

export enum OPTIONS {
  ATTACK = 'attack'
}

export default class Options {
  readonly _list: OPTIONS[]
  constructor(list: OPTIONS[]) {
    this._list = list
  }

  list(): OptionMenu[] {
    return this._list.map((item) => this.option(item))
  }

  private option(option: OPTIONS): OptionMenu {
    switch (option) {
      case OPTIONS.ATTACK:
        return {
          label: 'attack',
          option: AttackOption
        }

      default:
        throw new Error('Not found correct option')
    }
  }
}
