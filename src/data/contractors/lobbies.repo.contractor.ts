import ApiContractor from './api.contractor'

export default interface LobbyRepo {
  api: ApiContractor
  list: (query?: any) => Promise<any>
}
