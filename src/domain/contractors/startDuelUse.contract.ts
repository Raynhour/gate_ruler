import DuelRepoContract from '@/data/contractors/duel.contract'

export default interface StartDuelUse<T> {
  readonly repo: DuelRepoContract
  duel(id: number): Promise<T>
}
