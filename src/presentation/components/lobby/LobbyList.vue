<template lang="pug">
.lobby-list
  lobby-item(v-for="item in list" :key="item.id" :item="item")
</template>

<script lang="ts">
import Lobby from '@/domain/entities/lobby'
import LobbyItem from '@/presentation/components/lobby/LobbyItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    list: {
      required: true,
      type: Array as () => Lobby[]
    }
  },

  components: {
    LobbyItem
  }
})
</script>

<style lang="scss">
.lobby-list {
  border: 3px solid $primary;
  border-radius: 3px;
  background-color: rgba($primary, 0.4);
}
</style>
