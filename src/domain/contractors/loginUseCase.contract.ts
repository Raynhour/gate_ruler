import { Login } from '../entities/auth'

export interface LoginUse {
  login(formData: Login): Promise<any>
}
