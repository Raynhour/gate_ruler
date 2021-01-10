import ApiContractor from '@/data/contractors/api.contractor'
import LobbyService from '@/data/services/__mocks__/lobby.service'
import Lobby from '@/domain/entities/lobby'
import LoadLobbyUseCase from '@/domain/usecases/loadLobbiesUseCase'
import { reactive, toRefs } from 'vue'

type lobbiesState = {
  list: Lobby[]
  loading: boolean
}

export default function(api: ApiContractor) {
  const state: lobbiesState = reactive({
    list: [],
    loading: false
  })

  const loadLobbies = async () => {
    try {
      state.loading = true
      let res = await new LoadLobbyUseCase(new LobbyService(api)).output()
      state.list = res
    } catch (error) {
      alert('err')
    } finally {
      state.loading = false
    }
  }
  loadLobbies()

  return { ...toRefs(state), loadLobbies }
}
