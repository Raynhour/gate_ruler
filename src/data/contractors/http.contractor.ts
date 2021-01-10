import { Config } from '@/data/api/api'

export interface HttpContractorInstance {
  URL: string
  config: Config
  request: () => Promise<any>
}

export default interface HttpContractor {
  new (URL: string, config: Config): HttpContractorInstance
}
