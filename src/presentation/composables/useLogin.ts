import { toRefs, reactive } from 'vue'

export default function() {
  const state = reactive({
    username: '',
    password: ''
  })

  return { ...toRefs(state) }
}
