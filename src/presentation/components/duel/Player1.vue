<template lang="pug">
div.player
  component(:is="layout" v-if="layout" :player="player")

</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { View, VIEW_LAYOUT } from '@/domain/entities/core/view/view'
import LayoutDefault from './layout/LayoutDefault.vue'
export default defineComponent({
  props: {
    player: {
      required: true,
      type: Object as PropType<View>
    }
  },

  setup(props) {
    let layout = computed(() => {
      let base = `Layout`
      switch (props.player.layout) {
        case VIEW_LAYOUT.DEFAULT:
          return `${base}Default`

        default:
          return `${base}Default`
      }
    })
    return { layout }
  },

  components: {
    LayoutDefault
  }
})
</script>

<style lang="scss">
.test {
  transform: perspective(50em) rotateX(40deg);
  border: 1px solid $primary;
  box-shadow: 0 0 10px 1px$primary;
  width: 100px;
  height: 150px;
}
</style>
