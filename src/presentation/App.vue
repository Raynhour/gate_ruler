<template>
  <div id="nav"></div>
  <router-view />
</template>

<script lang="ts">
import { reactive, provide, readonly, toRefs, defineComponent } from 'vue'
import instance from '@/data/api/initApi'
import INJECTIONS from '@/utils/enums/injections.enum'
export default defineComponent({
  setup() {
    const api = reactive({ api: instance })
    provide(INJECTIONS.API, toRefs(readonly(api)))
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
