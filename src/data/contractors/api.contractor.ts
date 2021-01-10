import { Config } from '../api'

export default interface ApiContractor {
  get: (url: string, config?: Config) => Promise<any>
  // post: <Config, Data, Res>(url: string, data?: Data, config?: Config) => Promise<Res>
  // put: <Config, Data, Res>(url: string, data?: Data, config?: Config) => Promise<Res>
  // remove: <Config, Res>(url: string, config?: Config) => Promise<Res>
}
