import AuthRepoContract from '@/data/contractors/auth.contract'
import { LoginUse } from '../contractors/LoginUseCase.contract'
import { Login } from '../entities/auth'
import LoginValidate from '../entities/validation/loginValidate'

export default class LoginUseCase implements LoginUse {
  private repo: LoginUse
  constructor(repo: LoginUse) {
    this.repo = repo
  }

  async login(formData: Login) {
    let res = await new LoginValidate(this.repo).login(formData)
    return res
  }
}
