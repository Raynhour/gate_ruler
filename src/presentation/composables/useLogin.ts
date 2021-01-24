import AuthService from '@/data/services/auth.service'
import { Login } from '@/domain/entities/auth'
import LoginUseCase from '@/domain/usecases/login.usecase'
import INJECTIONS from '@/utils/enums/injections.enum'
import { InjectionType } from '@/utils/types'
import { toRefs, reactive, inject } from 'vue'

export default function() {
  const inj = inject<InjectionType>(INJECTIONS.API)
  if (!inj) {
    throw new Error('API inject not found')
  }
  const state = reactive({
    username: '',
    password: '',
    loading: false
  })

  const login = async () => {
    try {
      state.loading = true
      await new LoginUseCase(new AuthService(inj.api.value)).login(state)
    } catch (error) {
      console.log(error)
      alert(error)
    } finally {
      state.loading = false
    }
  }

  return { ...toRefs(state), login }
}
