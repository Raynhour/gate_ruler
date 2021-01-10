import ApiContractor from './api.contractor'

export default interface DuelDeck {
  api: ApiContractor
  list: (query?: any) => Promise<any>
}
