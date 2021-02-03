<template lang="pug">
.modal(v-if="show")
  .modal__body
    div text
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let show = ref(false);
    const toggle = (): void => {
      show.value = !show.value;
    };

    return { show, toggle };
  },
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  &__body {
    margin: auto;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px $primary;
  }
}
</style>
