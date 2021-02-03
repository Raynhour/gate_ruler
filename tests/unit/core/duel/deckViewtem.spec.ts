import { mount } from "@vue/test-utils";

import Component from "@/presentation/components/duel/zone/UnitZone.vue";
import INJECTIONS from "@/utils/enums/injections.enum";
import { GlobalMountOptions } from "@vue/test-utils/dist/types";
import { duel } from "../../../mocks/duel.mock";
import { PLAYERS } from "@/presentation/composables/useGame";

function createWrapper(
  overrides?: GlobalMountOptions | undefined,
  props?: any
) {
  const defaultMountingOptions = {
    sync: false,
    stubs: {
      transition: false,
    },
    provide: {
      [INJECTIONS.CURRENT_PLAYER]: PLAYERS.PLAYER1,
    },
  };

  const defaultProps = {
    index: 1,
    zone: duel.player1.zone.attack[1],
  };
  return mount(Component, {
    props: { ...defaultProps, ...props },

    global: { ...defaultMountingOptions, ...overrides },
  });
}

describe("DeckViewItem.vue", () => {
  describe("Hover", () => {
    it("Then show options", () => {
      throw new Error("not implemented");
    });

    describe("When click on option", () => {
      it("Then tooltip hidden", () => {
        throw new Error("not implemented");
      });
    });
  });
});
