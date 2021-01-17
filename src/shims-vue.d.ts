declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@meforma/vue-toaster' {
  import Toaster from "@meforma/vue-toaster/src/index"
  export default Toaster
}