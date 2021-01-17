import ErrorHandler, { ErrorFields } from '@/data/api/errorHandler'
import { LoginUse } from '@/domain/contractors/LoginUseCase.contract'
import { Login } from '../auth'

export default class LoginValidate implements LoginUse {
  private origin: LoginUse
  constructor(origin: LoginUse) {
    this.origin = origin
  }

  async login(formData: Login) {
    this.validate(formData)
    return this.origin.login(formData)
  }

  private validate(formData: Login): void {
    const fields: Login = {
      username: '',
      password: ''
    }
    fields.username = this.validUsername(formData.username)
    Object.values(fields).forEach((field) => {
      if (!field.length) return
      throw new ErrorHandler(new ErrorFields(fields).error()).handle()
    })
  }

  private validUsername(username: string): string {
    if (username.length > 3 && username.length < 20) return ''
    return 'Username must contain atleast 3 chars'
  }
}
