<template lang="pug">
section.main home
  img(:src="require('@/assets/logo.png')").main__logo
  div.enter
    button(@click="login").enter__button LOGIN
</template>

<script>
import { useRouter } from 'vue-router'
import ROUTER_NAMES from '../router/router-names'
export default {
  setup() {
    const router = useRouter()
    function login() {
      router.push({
        name: ROUTER_NAMES.LOBBIES
      })
    }

    return {
      login
    }
  }
}
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
