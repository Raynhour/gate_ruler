<template lang="pug">
section.main home
  img(:src="require('@/assets/logo.png')").main__logo
  div.enter
    login-form
    //- button.enter__button LOGIN
</template>

<script lang="ts">
import { Toaster } from '@/utils/types'
import { defineComponent, inject } from 'vue'
import { useRouter } from 'vue-router'
import ROUTER_NAMES from '../router/router-names'
import LoginForm from '../components/auth/Login.vue'
export default defineComponent({
  setup() {
    const router = useRouter()
    const notify = inject<Toaster>('toast')
    if (!notify) {
      throw new Error('not inject toast')
    }

    return {}
  },

  components: {
    LoginForm
  }
})
</script>

<style lang="scss">
.main {
  &__logo {
    width: 200px;
    position: absolute;
    left: 0;
  }
}

.enter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &__button {
    cursor: pointer;
    font-family: $font-title;
    color: #fff;
    width: 250px;
    height: 60px;
    font-size: 21px;
    background-color: $primary;
    outline: none;
    border-color: $primary;
    border-radius: 5px;
  }
}
</style>
