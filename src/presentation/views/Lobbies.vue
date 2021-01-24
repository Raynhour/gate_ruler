<template lang="pug">
section.section
  .section__title Duel!
  .lobbies
    .lobbies__filters ff
    .lobbies__main 
      lobby-list(:list="list")

</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import INJECTIONS from '@/utils/enums/injections.enum'
import UseLobbies from '../composables/UseLobbies.composable'
import { InjectionType } from '@/utils/types'
import LobbyList from '@/presentation/components/lobby/LobbyList.vue'
import tests from './test.vue'

export default defineComponent({
  setup() {
    const inj = inject<InjectionType>(INJECTIONS.API)
    if (!inj) {
      throw new Error('err')
    }
    const { list } = UseLobbies(inj.api.value)
    return {
      list
    }
  },

  components: {
    LobbyList,
    tests: tests
  }
})
</script>

<style lang="scss">
.lobbies {
  display: flex;
  &__filters {
    width: 40%;
  }
  &__main {
    width: 60%;
  }
}
</style>
