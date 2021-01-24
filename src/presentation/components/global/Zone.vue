<template lang="pug">
.zone 
  .zone__round
  .zone__field(
    :class="{'zone__field_default' : isDefaultPosition, 'zone__field_rest': isRestPosition}"
  )
</template>

<script>
export default {
  props: {
    isDefaultPosition: Boolean,
    isRestPosition: Boolean
  }
}
</script>

<style lang="scss">
.zone {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 100%;
  &__round {
    position: absolute;
    top: 0;
    // transform: perspective(50em) rotateX(40deg);
    width: 100%;
    border: 1px solid $primary;
    border-radius: 50%;
    box-shadow: 0 0 10px 1px$primary;
    height: 100%;
  }
  &__field {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;

    border: 1px solid $primary;
    width: 60%;
    height: 75%;
    // &_default {
    //   transform: perspective(50em) rotateX(40deg);
    // }
    // &_rest {
    //   transform: perspective(50em) rotateX(40deg) rotateZ(90deg);
    // }
  }
}
</style>
