import AuthRepoContract from '@/data/contractors/auth.contract'
import { LoginUse } from '../contractors/LoginUseCase.contract'
import { Login } from '../entities/auth'

export default class LoginUseCase implements LoginUse {
  private repo: AuthRepoContract
  constructor(repo: AuthRepoContract) {
    this.repo = repo
  }

  async login(formData: Login) {
    let res = await this.repo.login(formData)
    return res
  }
}
