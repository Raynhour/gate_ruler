<template lang="pug">
.zone(
  :class="{'zone_select-player1': player1Selected, 'zone_selected_player_2': player2Selected}"
) 
  .zone__round
  .zone__field(
    :class="{'zone__field_default' : isDefaultPosition, 'zone__field_rest': isRestPosition}"
  )
    slot(name="field")
    //- .zone__card(
    //-   :style="{backgroundImage: `url(${card.img})`}"
    //- )
</template>

<script lang="ts">
import { Card } from "@/domain/entities/core/Card";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    isDefaultPosition: Boolean,
    isRestPosition: Boolean,
    card: {
      type: Object as PropType<Card>,
      default: () => {
        return {};
      },
    },
    player1Selected: Boolean,
    player2Selected: Boolean,
  },
});
</script>

<style lang="scss">
.zone {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 100%;
  &_select-player1 &__round {
    border-color: red;
  }
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
    &_rest {
      transform: rotateZ(90deg);
    }
  }
  &__card {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
</style>
