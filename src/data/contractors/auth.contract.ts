import ApiContractor from './api.contractor'

export default interface AuthRepoContract {
  api: ApiContractor
  login<Data>(formData: Data): Promise<any>
}
