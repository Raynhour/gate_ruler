<template lang="pug">
.preview
  .preview__img
    img(:src="preview.img")
  p
  div.preview__text
    h3.preview__title {{ preview.name }}
    p.preview__effect {{ preview.effect }}
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import usePreview from "@/presentation/composables/usePreview";

export default defineComponent({
  setup() {
    let { preview, showPreview } = usePreview();
    return { preview, showPreview };
  },
});
</script>

<style lang="scss">
.preview {
  width: 200px;
  height: 274px;
  &__img {
    height: 274px;
  }
  & img {
    width: 100%;
  }
  &__text {
    background: #fff;
    height: 200px;
    overflow: auto;
    padding: 5px;
  }
  &__title {
    margin: 0;

    font-weight: bold;
    color: #000;
    font-size: 13px;
    font-family: $font-title;
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
  }
  &__effect {
    margin-top: 5px;
    color: #000;
    font-family: $font;
    font-size: 12px;
  }
}
</style>
