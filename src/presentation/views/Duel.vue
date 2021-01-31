<template lang="pug">
section(
  
).game
  .game__bg(
  )
  preloader(v-if="loading" :data-test="DATA_TEST.DUEL.PRELOADER")
  .duel(v-if="duel")
    //- Player1(:player="duel.player2" v-if="duel.player2").player2
    div.divider
    Player1(:player="duel.player1" v-if="duel.player1")
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { InjectionType } from "@/utils/types";
import useGame from "../composables/useGame";
import { useRoute } from "vue-router";
import INJECTIONS from "@/utils/enums/injections.enum";
import { DATA_TEST } from "@/utils/enums/elements.enum";

import Preloader from "../components/duel/DuelPreloader.vue";
import Player1 from "@/presentation/components/duel/Player1.vue";
import Player2 from "@/presentation/components/duel/Player2.vue";

export default defineComponent({
  setup() {
    const inj = inject<InjectionType>(INJECTIONS.API);
    if (!inj) {
      throw new Error("err");
    }
    console.log(inj);
    const route = useRoute();
    const game = useGame(inj.api.value);
    game.start(+route.params.id);

    return { ...game, DATA_TEST: ref(DATA_TEST) };
  },

  components: {
    preloader: Preloader,
    Player1,
    Player2,
  },
});
</script>

<style lang="scss">
.duel {
  margin: 0 auto;
  width: 1024px;
  height: 100%;
}

.game {
  height: 100vh;
  &__bg {
    // width: 100vw;
    // height: 100vh;
    // top: 50%;
    // left: 50%;
    // margin-top: -200vh;
    // margin-left: -200vw;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
    // animation: rotate 2000s linear infinite;
  }
}

.player2 {
  transform: rotateX(180deg);
}

.divider {
  margin: 30px 0;
  background-color: $primary;
  height: 1px;
}
@keyframes rotate {
  100% {
    transform: rotate(-360deg);
  }
}
</style>
