<template lang="pug">
form()
  field(label="Username" v-model="username" data-test="login-username")
  field(label="Password" v-model="password" type="password" data-test="login-password")
  btn(type="submit" :disabled="submitDisabled") Login
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Field from '../global/Field.vue'
import Btn from '../global/Button.vue'
import useLogin from '@/presentation/composables/useLogin'

export default defineComponent({
  setup() {
    let { username, password } = useLogin()
    let submitDisabled = computed(() => {
      if (username.value.length && password.value.length) return false
      return true
    })
    return { username, password, submitDisabled }
  },

  components: {
    Field,
    Btn
  }
})
</script>
