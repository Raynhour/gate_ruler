import ApiContractor from '@/data/contractors/api.contractor'
import DuelService from '@/data/services/__mocks__/duel.service'
import StartDuelUseCase from '@/domain/usecases/startDuel.usecase'
import { reactive, toRefs } from 'vue'

export default function(api: ApiContractor) {
  const state = reactive({
    duel: {},
    loading: false
  })

  const start = async (id: number) => {
    try {
      state.loading = true
      let res = await new StartDuelUseCase(new DuelService(api)).duel(id)
      state.duel = res
    } catch (error) {
      console.log(error)
      console.log('err')
    } finally {
      state.loading = false
    }
  }

  return { ...toRefs(state), start }
}
