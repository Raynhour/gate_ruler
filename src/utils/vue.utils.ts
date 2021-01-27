import { inject } from "vue"

const injection = <T>(key: symbol): T => {
  let inj = inject<T>(key)
  if (!inj) {
    throw new Error(`${key.toString()} inject not found`)
  }
  return inj
}

export { injection }
