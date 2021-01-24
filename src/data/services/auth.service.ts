import ApiContractor from '../contractors/api.contractor'
import AuthRepo from '../contractors/auth.contract'
import { PATH_AUTH } from '../enums/apiPath.enum'

export default class AuthService implements AuthRepo {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
    console.log(api)
  }

  public async login<Data, Res>(formData: Data) {
    const res = await this.api.post<Data, Res>(PATH_AUTH.LOGIN, formData)
    return res
  }
}
