import ApiContractor from './api.contractor'

export default interface DuelRepoContract {
  api: ApiContractor
  session: (id: number) => Promise<any>
}
